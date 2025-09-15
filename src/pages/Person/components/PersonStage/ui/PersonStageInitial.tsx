import type { FC } from 'react';
import type { IPersonStageProps } from '../../../interface/interface';

import { useContext } from 'react';

import { CurrentTeamContext } from '../../../../../shared/context/team';

import Button from '../../../../../shared/components/Button/ui/Button';
import PersonVideo from '../../PersonVideo/ui/PersonVideo';

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
      <div className='person-stage__container'>
        <div className='person-stage__video'>
          <PersonVideo url={stage.url_video} />
        </div>
        <div className='person-stage__info'>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>Поздравляем с участием в Международных транспортных проектных соревнованиях!</h4>
            <p className='person-stage__row-subtitle'>Проектная деятельность – это способ учиться и управлять процессами через решение реальных проблем. Вам предстоит пройти пять этапов: анализ ситуации, проблемное интервью, поиск идеи, создание прототипа и видеозащита. Такой порядок неслучаен: сначала важно понять проблему и её участников, затем предложить реалистичное решение, оформить и протестировать его, а в финале – убедительно представить результат.</p>
            <p className='person-stage__row-subtitle'>Для участников подготовлены четыре набора инструментов: «базовый», «классический», «дизмыш» (по дизайн-мышлению) и «СМД» (со схемами и моделями). Каждый сможет выбрать удобный уровень погружения, но этапы проектной работы остаются одинаковыми для всех.</p>
          </div>
        </div>
      </div>

      <div className='person-stage__container'>
        <div className='person-stage__video'>
          {
            currentTeam.case && currentTeam.case.description &&
            <div className='person-stage__row'>
              <h4 className='person-stage__row-title'>Описание проблемы</h4>
              <p className='person-stage__row-subtitle'>Ознакомьтесь с полным описанием проблемной ситуации, составленным компанией-партнёром.</p>
              <Button style={btnStyle} text='Скачать' type='link' link={currentTeam.case.description} />
            </div>
          }
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>Чат проблемы</h4>
            <p className='person-stage__row-subtitle'>Задайте вопросы о проблеме представителям компании и организаторам .</p>
            <Button style={btnStyle} text='Вступить' type='link' link={currentTeam.case && currentTeam.case.telegram_url || ''} />
          </div>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>Канал соревнований</h4>
            <p className='person-stage__row-subtitle'>Следите за новостями проектных соревнований: сроки, ответы на вопросы, нюансы и советы .</p>
            <Button style={btnStyle} text='Подписаться' type='link' link='https://t.me/contestmiit' />
          </div>
        </div>
        <div className='person-stage__info'>
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
      </div>
    </div>
  );
};

export default PersonStageInitial;
