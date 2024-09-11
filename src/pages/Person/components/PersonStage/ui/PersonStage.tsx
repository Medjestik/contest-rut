import type { FC } from 'react';
import type { IPersonStageProps } from '../../../interface/interface';

import { useContext } from 'react';

import { CurrentTeamContext } from '../../../../../shared/context/team';

import PersonVideo from '../../PersonVideo/ui/PersonVideo';
import Button from '../../../../../shared/components/Button/ui/Button';

import '../styles/style.css';

const PersonStage: FC<IPersonStageProps> = ({ stage, onOpen, onLink, onChangeStage }) => {

  const btnStyle = {
    margin: '0',
    fontSize: '18px',
    lineHeight: '18px',
    padding: '8px 32px',
  };

  const currentTeam = useContext(CurrentTeamContext);
  
  return (
    <div className='person-stage'>
      <span className='person-stage__number'>Этап {stage.id} / 5</span>
      <h2 className='person-stage__title'>{stage.name || ''}</h2>
      <p className='person-stage__subtitle'>На этом шаге вам предстоит изучить проблему и определить заинтересованных лиц, чьё мнение следует учесть для решения проблемы. Этот шаг нужен, чтобы не упустить мнение важных лиц...</p>
      <div className='person-stage__container'>
        <div className='person-stage__video'>
          <h4 className='person-stage__row-title'>Шаг 1. Видеоинструкция</h4>
          <p className='person-stage__row-subtitle'>Изучите инструкцию и выполните задание.</p>
          <PersonVideo />
        </div>
        <div className='person-stage__info'>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>Шаг 2. Шаблон</h4>
            <p className='person-stage__row-subtitle'>Скачайте и изучите шаблон.</p>
            <Button style={btnStyle} text='Скачать' />
          </div>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>Шаг 3. Задание</h4>
            {
              stage.team_file_count > 0
              ?
              <>
                <p className='person-stage__row-subtitle'>Задание загружено, вы можете перейти к следующему этапу.</p>
                {
                  currentTeam.current_stage === stage.id &&
                  <Button style={btnStyle} text='Перейти' onClick={onChangeStage} />
                }
              </>
              :
              <>
                <p className='person-stage__row-subtitle'>Загрузите задание на проверку.</p>
                <div className='person-stage__btn-container'>
                  <Button style={btnStyle} text='Добавить файл' onClick={onOpen} />
                  <Button style={btnStyle} text='Прикрепить ссылку' onClick={onLink} />
                </div>
                
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonStage;
