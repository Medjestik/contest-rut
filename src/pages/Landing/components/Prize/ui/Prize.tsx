import type { FC } from 'react';

import moneyImg from '../../../../../shared/icons/money.svg';
import prizeImg from '../../../../../shared/icons/prize.svg';

import '../styles/style.css';

interface IPrizeProps {
  windowWidth: number;
}

const Prize: FC<IPrizeProps> = ({ windowWidth }) => {

  return (
    <div className='prize' id='prize'>
      <h2 className='prize__title'>ПРИЗЫ</h2>
      <div className='prize__description'>
        <h4 className='prize__count'>2&nbsp;200&nbsp;000&nbsp;рублей</h4>
        <p className='prize__subtitle'>призовой фонд Международных транспортных проектных соревнований</p>
      </div>
      {
        windowWidth > 1000
        ?
        <ul className='prize__list'>
          <li className='prize__item'>
            <img className='prize__item-icon' src={moneyImg} alt='иконка'></img>
            <span className='prize__item-title'>200&nbsp;000 рублей</span>
          </li>
          <li className='prize__item'>
            <p className='prize__item-text'>Приз <strong>200&nbsp;000 рублей</strong> команде, предложившей лучшее решение каждой проблемы </p>
          </li>
          <li className='prize__item prize__item-prize'>
            <img className='prize__item-prize-icon' src={prizeImg} alt='иконка'></img>
            <span className='prize__item-prize-title'>1&nbsp;000&nbsp;000 рублей</span>
            <span className='prize__item-prize-tag'>ГРАН-ПРИ</span>
            <span className='prize__item-prize-text'>ЛУЧШЕЙ КОМАНДЕ СЕЗОНА</span>
          </li>
          <li className='prize__item'>
            <img className='prize__item-icon' src={moneyImg} alt='иконка'></img>
            <span className='prize__item-title'>200&nbsp;000 рублей</span>
          </li>
          <li className='prize__item'>
            <img className='prize__item-icon' src={moneyImg} alt='иконка'></img>
            <span className='prize__item-title'>200&nbsp;000 рублей</span>
          </li>
          <li className='prize__item'>
            <img className='prize__item-icon' src={moneyImg} alt='иконка'></img>
            <span className='prize__item-title'>200&nbsp;000 рублей</span>
          </li>
        </ul>
        :
        <ul className='prize__list'>
          <li className='prize__item prize__item-prize'>
            <img className='prize__item-prize-icon' src={prizeImg} alt='иконка'></img>
            <span className='prize__item-prize-title'>1&nbsp;000&nbsp;000 рублей</span>
            <span className='prize__item-prize-tag'>ГРАН-ПРИ</span>
            <span className='prize__item-prize-text'>ЛУЧШЕЙ КОМАНДЕ СЕЗОНА</span>
          </li>
          <li className='prize__item'>
            <img className='prize__item-prize-icon' src={moneyImg} alt='иконка'></img>
            <span className='prize__item-prize-title'>200&nbsp;000 рублей</span>
            <p className='prize__item-text'>Приз <strong>200&nbsp;000 рублей</strong> команде, предложившей лучшее решение каждой проблемы </p>
          </li>
        </ul>
      }

    </div>
  );
};

export default Prize;
