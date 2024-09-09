import type { FC } from 'react';
import type { IPersonStageProps } from '../../../interface/interface';

import PersonVideo from '../../PersonVideo/ui/PersonVideo';
import Button from '../../../../../shared/components/Button/ui/Button';

import '../styles/style.css';

const PersonStage: FC<IPersonStageProps> = ({ stage }) => {

  const btnStyle = {
    margin: '12px 0 0',
    fontSize: '18px',
    lineHeight: '18px',
    padding: '8px 32px',
  };
  
  return (
    <div className='person-stage'>
      <span className='person-stage__number'>Этап {stage.id} / 5</span>
      <h2 className='person-stage__title'>{stage.name || ''}</h2>
      <p className='person-stage__subtitle'>На этом шаге вам предстоит изучить проблему и определить заинтересованных лиц, чьё мнение следует учесть для решения проблемы. Этот шаг нужен, чтобы не упустить мнение важных лиц...</p>
      <div className='person-stage__container'>
        <div className='person-stage__info'>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>1. Инструкция</h4>
            <p className='person-stage__row-subtitle'>Изучите инструкцию и выполните задание.</p>
            <Button style={btnStyle} text='Скачать' />
          </div>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>2. Задание</h4>
            <p className='person-stage__row-subtitle'>Загрузите файл для проверки.</p>
            <Button style={btnStyle} text='Добавить файл' />
          </div>
        </div>
        <PersonVideo />
      </div>
    </div>
  );
};

export default PersonStage;
