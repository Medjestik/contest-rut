import type { FC } from 'react';
import type { IForm } from '../../../interface/interface';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Preloader from '../../../../../shared/components/Preloader/ui/Preloader';
import Button from '../../../../../shared/components/Button/ui/Button';

import * as api from '../../../../../shared/utils/api';

import '../styles/style.css';

const btnBackStyle = {
  margin: '0',
  padding: '12px 20px',
  fontSize: '16px',
  lineHeight: '16px',
};

const btnScoreStyle = {
  margin: '0',
  padding: '8px 14px',
  fontSize: '16px',
  lineHeight: '16px',
  borderRadius: '12px',
};

const btnFilesStyle = {
  margin: '0',
  padding: '8px 14px',
  fontSize: '16px',
  lineHeight: '16px',
  borderRadius: '12px',
};

const ExpertForms: FC = () => {

  const navigate = useNavigate();
  const { nominationId } = useParams();

  const [forms, setForms] = useState<IForm[]>([]);

  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  const getData = () => {
    setIsLoadingData(true);
    const token = localStorage.getItem('token');
    if (token && nominationId) {
      api.getForms(token, nominationId)
      .then((res) => {
        setForms(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoadingData(false));
    }
  };

  const handleOpenForm = (form: IForm) => {
    console.log(form);
    // navigate(`/main/nomination/${nominationId}/form/${form.team_id}`);
  };

  const backToNominations = () => {
    navigate('/main');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    isLoadingData 
    ?
    <Preloader />
    :
    <>
    <div className='expert-form__data'> 
      <div className={`expert-form__img expert-form__img_type_${nominationId}`}></div>
      <div className='expert-form__info'>
        <h2 className="expert__title">Выберите работу и оцените её</h2>
        <p className='expert-form__score'>Количество работ: {forms.length}</p>
        <div className='form__input-field'>
          <Button onClick={backToNominations} text='Вернуться к номинациям' style={btnBackStyle} color='cancel' />
        </div>
      </div>
    </div>
    {
      forms.length > 0
      ?
      <ul className='expert__list'>
        {
          forms.map((elem, i) => (
            <li className='expert__item' key={i} onClick={() => handleOpenForm(elem)}>
              <span className='expert__item-count'>{i + 1}.</span>
              <div className='expert__item-info'>
                <h4 className='expert__item-name'>{elem.team_name}</h4>
                <p className='expert__item-text'>{elem.university_name}</p>
                <div className='expert__item-buttons'>
                  <Button type='link' text='Видеозащита' link={elem.stages[4].video?.url || ''} style={btnFilesStyle} />
                  <Button
                    type="link"
                    text="Финальные слайды"
                    link={elem.stages[4]?.file ? `https://contest-api.emiit.ru/${elem.stages[4].file.file}` : elem.stages[4].url?.url}
                    style={btnFilesStyle}
                  />
                  <Button
                    type="link"
                    text="Шаг 1"
                    link={elem.stages[0]?.file ? `https://contest-api.emiit.ru/${elem.stages[0].file.file}` : elem.stages[0].url?.url}
                    style={btnFilesStyle}
                  />
                   <Button
                    type="link"
                    text="Шаг 2"
                    link={elem.stages[1]?.file ? `https://contest-api.emiit.ru/${elem.stages[1].file.file}` : elem.stages[1].url?.url}
                    style={btnFilesStyle}
                  />
                  <Button
                    type="link"
                    text="Шаг 3"
                    link={elem.stages[2]?.file ? `https://contest-api.emiit.ru/${elem.stages[2].file.file}` : elem.stages[2].url?.url}
                    style={btnFilesStyle}
                  />
                  <Button
                    type="link"
                    text="Шаг 4"
                    link={elem.stages[3]?.file ? `https://contest-api.emiit.ru/${elem.stages[3].file.file}` : elem.stages[3].url?.url}
                    style={btnFilesStyle}
                  />
                  <Button color='secondary' text='Оценить работу' style={btnScoreStyle} />
                </div>
              </div>
              <span className='expert__item-score'>{elem.average_score || '0'}</span>
            </li>
          ))
        }
      </ul>
      :
      <p className='expert__empty'>Список анкет пуст.</p>
    }
    </>
  );
};

export default ExpertForms;
