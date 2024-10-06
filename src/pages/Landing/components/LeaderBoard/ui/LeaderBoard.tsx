import { useState, type FC } from 'react';

import { results } from '../mock/mock';

import Section from '../../../../../shared/components/Section/ui/Section';
import { ENAV } from '../../../../../shared/components/Navigation/interface/interface';

import '../styles/style.css';

interface ICase {
  id: number;
  caseName: string;
  teams: ITeam[];
}

interface ITeam {
  place: number;
  name: string;
  university: string;
  status: string;
}

const LeaderBoard: FC = () => {
  const [currentCase, setCurrentCase] = useState(results[0]);

  const handleSelectCase = (item: ICase) => {
    setCurrentCase(item);
  };

  const renderStatus = (status: string) => {
    switch(status) {
      case('final'):
        return (
          <div className='leaderboard__status leaderboard__status-final'>Финалист</div>
        );
      case('best'):
        return (
          <div className='leaderboard__status leaderboard__status-best'>Лучшая команда Вуза</div>
        );
      default:
        return (
          <div></div>
        );
    }
  };

  return (
    <div className='cases' id={ENAV.LEADERBOARD}>
      <Section>
        <div className='leaderboard__section'>
          <h2 className='section__title'>Лидеры сезона</h2>
          <ul className='leaderboard__nav'>
            {
              results.map((item, i) => (
                <li key={i} className={`leaderboard__nav-item ${currentCase.id === item.id ? 'leaderboard__nav-item-active' : 'leaderboard__nav-item-default'}`} onClick={() => handleSelectCase(item)}>
                  <span className='leaderboard__nav-text'>{item.caseName}</span>
                </li>
              ))
            }
          </ul>
          {
            currentCase.teams.length > 0 &&
            <ul className='leaderboard__list'>
              <li className='leaderboard__row leaderboard__row-header'>
                <div className='leaderboard__text leaderboard__text-header'>Место</div>
                <div className='leaderboard__text leaderboard__text-header'>Команда</div>
                <div className='leaderboard__text leaderboard__text-header'>ВУЗ</div>
                <div className='leaderboard__text leaderboard__text-header'>Статус</div>
              </li>
              {
                currentCase.teams.map((team, i) => (
                  <li className='leaderboard__row leaderboard__row-main' key={i}>
                    <div className='leaderboard__text leaderboard__text-header'>{i + 1}</div>
                    <div className='leaderboard__text'>{team.name}</div>
                    <div className='leaderboard__text'>{team.university}</div>
                    {renderStatus(team.status)}
                  </li>
                ))
              }
            </ul>
          }
        </div>
      </Section>
    </div>
  );
};

export default LeaderBoard;
