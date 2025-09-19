import type { FC } from 'react';
import type { IControlTeam } from '../interface/interface';
import type { ICaseItem } from '../../../features/case/interface/interface';
import { useState, useEffect } from 'react';

import * as api from '../../../shared/utils/api';

import Preloader from '../../../shared/components/Preloader/ui/Preloader';
import { Table } from '../../../shared/components/Table/ui/Table';
import { RegistrationChart } from '../components/RegistrationChart/RegistrationChart';
import Button from '../../../shared/components/Button/ui/Button';
import { SubdivisionPieChart } from '../components/RegistrationChart/SubdivisionPieChart';

import { getRegistrationStats } from '../lib/getRegistrationStats';
import { getInstituteStats } from '../lib/getInstituteStats';
import { getInstituteStages } from '../lib/getInstituteStages';
import { getCaseStages } from '../lib/getCaseStages';

import '../styles/style.css';

const btnStyle = {
  margin: '0',
  padding: '8px 14px',
  borderRadius: '12px',
  fontSize: '18px',
  lineHeight: '1',
};

const Control: FC = () => {

  const [teams, setTeams] = useState<IControlTeam[]>([]);
  const [cases, setCases] = useState<ICaseItem[]>([]);

  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  const getData = () => {
    setIsLoadingData(true);
    const token = localStorage.getItem('token');
    if (token) {
    Promise.all([
      api.getRegisteredCases(),
      api.getTeams(token)
    ])
    .then(([cases, teams]) => {
      setCases(cases);
      setTeams(teams);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoadingData(false));
    }
  };

  const instituteStagesStats = getInstituteStages(teams);
  const instituteStagesTotalRow = instituteStagesStats.reduce((acc, item) => {
    acc.totalTeams += item.totalTeams;
    acc.stage1 += item.stage1;
    acc.stage2 += item.stage2;
    acc.stage3 += item.stage3;
    acc.stage4 += item.stage4;
    acc.stage5 += item.stage5;
    acc.stage6 += item.stage6;
    acc.percentProgress += item.percentProgress * item.totalTeams;
    return acc;
  }, {
    university: 'Итого',
    totalTeams: 0,
    percentOfTotal: 100,
    stage1: 0,
    stage2: 0,
    stage3: 0,
    stage4: 0,
    stage5: 0,
    stage6: 0,
    percentProgress: 0,
  });

  instituteStagesTotalRow.percentProgress = +(instituteStagesTotalRow.percentProgress / instituteStagesTotalRow.totalTeams).toFixed(1);

  const caseStagesStats = getCaseStages(teams);
  const caseStagesTotalRow = caseStagesStats.reduce((acc, item) => {
    acc.totalTeams += item.totalTeams;
    acc.stage1 += item.stage1;
    acc.stage2 += item.stage2;
    acc.stage3 += item.stage3;
    acc.stage4 += item.stage4;
    acc.stage5 += item.stage5;
    acc.stage6 += item.stage6;
    acc.percentProgress += item.percentProgress * item.totalTeams;
    return acc;
  }, {
    university: 'Итого',
    totalTeams: 0,
    percentOfTotal: 100,
    stage1: 0,
    stage2: 0,
    stage3: 0,
    stage4: 0,
    stage5: 0,
    stage6: 0,
    percentProgress: 0,
  });

  caseStagesTotalRow.percentProgress = +(caseStagesTotalRow.percentProgress / caseStagesTotalRow.totalTeams).toFixed(1);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='control'>
      { 
        isLoadingData
        ?
        <Preloader />
        :
        <>
        <div className='control__buttons'>
          <Button text='Экспорт участников' style={btnStyle} type='link' link='https://contest-api.emiit.ru/api/report/teams-export/' />
          <Button text='Экспорт прогресса' style={btnStyle} type='link' link='https://contest-api.emiit.ru/api/report/participants-export/' />
        </div>
        <h2 className='control__title' style={{ margin: '12px 0 16px' }}>Прогресс команд по институтам</h2>
        <Table>
          <div className='table__header' style={{ paddingRight: '16px', boxSizing: 'border-box' }}>
            <div className='table__main-column'>
              <div className='table__column table__column_type_header table__column_type_count'>
                <p className='table__text table__text_type_header'>№</p>
              </div>
              <div className='table__column table__column_type_header table__column_type_full'>
                <p className='table__text table__text_type_header'>Образовательная организация</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Всего</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 1</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 2</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 3</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 4</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 5</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Завершили</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Прогресс, %</p>
              </div>
            </div>
          </div>
          <ul className='table__main' style={{ height: '400px', overflow: 'auto' }}>
            {instituteStagesStats.map((item, i) => (
              <li className='table__row' key={i}>
                <div className='table__main-column table__main-column_type_full '>
                  <div className='table__column table__column_type_count'>
                    <p className='table__text'>{i + 1}</p>
                  </div>
                  <div className='table__column table__column_type_full'>
                    <p className='table__text'>
                      {item.university}
                    </p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.totalTeams}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage1}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage2}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage3}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage4}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage5}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage6}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center table__text_type_header'>{item.percentProgress}%</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='table__row table__row_type_total' style={{ paddingRight: '22.5px', boxSizing: 'border-box' }}>
            <div className='table__main-column table__main-column_type_full '>
              <div className='table__column table__column_type_count'>
                <p className='table__text table__text_type_header'></p>
              </div>
              <div className='table__column table__column_type_full'>
                <p className='table__text table__text_type_header table__text_weight_bold'>{instituteStagesTotalRow.university}</p>
              </div>
               <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.totalTeams}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.stage1}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.stage2}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.stage3}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.stage4}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.stage5}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.stage6}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{instituteStagesTotalRow.percentProgress}%</p>
              </div>
            </div>
          </div>
			  </Table>
        <h2 className='control__title' style={{ margin: '12px 0 16px' }}>Прогресс команд по проблемам</h2>
        <Table>
          <div className='table__header'>
            <div className='table__main-column'>
              <div className='table__column table__column_type_header table__column_type_count'>
                <p className='table__text table__text_type_header'>№</p>
              </div>
              <div className='table__column table__column_type_header table__column_type_full'>
                <p className='table__text table__text_type_header'>Проблема</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Всего</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 1</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 2</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 3</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 4</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Этап 5</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Завершили</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Прогресс, %</p>
              </div>
            </div>
          </div>
          <ul className='table__main'>
            {caseStagesStats.map((item, i) => (
              <li className='table__row' key={i}>
                <div className='table__main-column table__main-column_type_full '>
                  <div className='table__column table__column_type_count'>
                    <p className='table__text'>{i + 1}</p>
                  </div>
                  <div className='table__column table__column_type_full'>
                    <p className='table__text'>
                      {item.caseTitle}
                    </p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.totalTeams}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage1}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage2}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage3}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage4}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage5}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.stage6}</p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center table__text_type_header'>{item.percentProgress}%</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='table__row table__row_type_total' style={{ paddingRight: '7.5px', boxSizing: 'border-box' }}>
            <div className='table__main-column table__main-column_type_full '>
              <div className='table__column table__column_type_count'>
                <p className='table__text table__text_type_header'></p>
              </div>
              <div className='table__column table__column_type_full'>
                <p className='table__text table__text_type_header table__text_weight_bold'>{caseStagesTotalRow.university}</p>
              </div>
               <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.totalTeams}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.stage1}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.stage2}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.stage3}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.stage4}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.stage5}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.stage6}</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_align_center table__text_weight_bold'>{caseStagesTotalRow.percentProgress}%</p>
              </div>
            </div>
          </div>
			  </Table>
        <div className='control__row' style={{ margin: '20px 0 0' }}>
          <RegistrationChart stats={getRegistrationStats(teams)} />
        </div>
        <h2 className='control__title' style={{ margin: '20px 0 16px' }}>Регистрации по институтам</h2>
        <Table>
          <div className='table__header' style={{ paddingRight: '16px', boxSizing: 'border-box' }}>
            <div className='table__main-column'>
              <div className='table__column table__column_type_header table__column_type_count'>
                <p className='table__text table__text_type_header'>№</p>
              </div>
              <div className='table__column table__column_type_header table__column_type_full'>
                <p className='table__text table__text_type_header'>Образовательная организация</p>
              </div>
              <div className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header'>Команд (%)</p>
              </div>
              {
                cases.map((elem) => (
                  <div key={elem.id} className='table__column table__column_type_header table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_type_header table__text_fs_small table__text_align_center'>{elem.title}</p>
                    <p className='table__text table__text_type_header table__text_fs_small table__text_align_center'>({elem.company})</p>
                  </div>
              ))}
            </div>
          </div>
          <ul className='table__main' style={{ height: '400px', overflow: 'auto' }}>
            {getInstituteStats(teams).map((item, i) => (
              <li className='table__row' key={i}>
                <div className='table__main-column table__main-column_type_full '>
                  <div className='table__column table__column_type_count'>
                    <p className='table__text'>{i + 1}</p>
                  </div>
                  <div className='table__column table__column_type_full'>
                    <p className='table__text'>
                      {item.university}
                    </p>
                  </div>
                  <div className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_align_center'>{item.totalTeams} ({item.percentOfTotal}%)</p>
                  </div>
                  {
                    cases.map((elem) => (
                      <div key={elem.id} className='table__column table__column_align_center table__column_type_medium'>
                        <p className='table__text table__text_align_center'>
                          {item[elem.title] || ''}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </li>
            ))}
          </ul>
           <div className='table__row table__row_type_total' style={{ paddingRight: '22.5px', boxSizing: 'border-box' }}>
            <div className='table__main-column table__main-column_type_full '>
              <div className='table__column table__column_type_count'>
                <p className='table__text table__text_type_header'></p>
              </div>
              <div className='table__column table__column_type_full'>
                <p className='table__text table__text_type_header table__text_weight_bold'>Итого</p>
              </div>
              <div className='table__column table__column_align_center table__column_type_medium'>
                <p className='table__text table__text_type_header table__text_align_center'>{teams.length}</p>
              </div>
              {cases.map((elem) => {
                const totalPerCase = teams.filter(team => team.case.title === elem.title).length;
                return (
                  <div key={elem.id} className='table__column table__column_align_center table__column_type_medium'>
                    <p className='table__text table__text_type_header table__text_align_center'>{totalPerCase} ({(totalPerCase / teams.length * 100).toFixed(1)}%)</p>
                  </div>
                );
              })}
            </div>
          </div>
			  </Table>
        <div style={{ width: '100%', position: 'relative' }}>
          <h2 className='control__title' style={{ margin: '20px 0 16px' }}>Распределение по институтам РУТ (МИИТ)</h2>
          <SubdivisionPieChart teams={teams} universityId={763} />
        </div>
        </>
      }
    </div>
  );
};

export default Control;
