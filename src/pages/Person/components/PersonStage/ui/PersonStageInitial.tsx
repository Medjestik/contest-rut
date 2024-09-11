import type { FC } from 'react';
import type { IPersonStageProps } from '../../../interface/interface';

import { useContext } from 'react';

import { CurrentTeamContext } from '../../../../../shared/context/team';

import Button from '../../../../../shared/components/Button/ui/Button';

import '../styles/style.css';

const PersonStageInitial: FC<IPersonStageProps> = ({ stage }) => {

  const btnStyle = {
    margin: '0',
    fontSize: '18px',
    lineHeight: '18px',
    padding: '8px 32px',
  };
  
  const currentTeam = useContext(CurrentTeamContext);

  return (
    <div className='person-stage'>
      <h2 className='person-stage__title'>{stage.name || ''}</h2>
      <p className='person-stage__subtitle'>Поздравляем с участием в первых проектных соревнованиях студентов транспорта! Вам предстоит заполнить все поля и что-нибудь сделать. Ниже - кейс. Ля-ля-ля.</p>
      <div className='person-stage__container'>
        <div className='person-stage__info person-stage__info-case'>
          {
            currentTeam.case &&
            <div className='cases__card cases__card_color_grey'>
              <h4 className='cases__card-title'>Ситуация</h4>
              <p className='cases__card-text'>{currentTeam.case.situation || ''}</p>
              <h4 className='cases__card-title cases__card-title_type_problem'>Сбой</h4>
              <p className='cases__card-text'>{currentTeam.case.problem || ''}</p>
              <div className='cases__card-footer'>
                <img className='cases__card-icon' src={currentTeam.case.icon || ''} alt='иконка'></img>
              </div>
            </div>
          }
        </div>
        <div className='person-stage__info'>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>Описакние кейса</h4>
            <p className='person-stage__row-subtitle'>Скачайте и изучите описание кейса.</p>
            <Button style={btnStyle} text='Скачать' />
          </div>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>Чат с экспертами</h4>
            <p className='person-stage__row-subtitle'>Вы можете задать свой вопрос экспертам в специальном чате.</p>
            <Button style={btnStyle} text='Перейти' type='link' link={currentTeam.case && currentTeam.case.telegram_url || ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonStageInitial;
