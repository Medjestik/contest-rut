import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import CountdownTimer from '../../../../../widgets/CountdownTimer/ui/CountdownTimer';
import Button from '../../../../../shared/components/Button/ui/Button';
import { registrationOverDate } from '../../../../../shared/mock/dates';
import { EROUTES } from '../../../../../shared/utils/ERoutes';

import '../styles/style.css';

const Main: FC = () => {
  const navigate = useNavigate();

  const btnStyle = {
    margin: '30px 0 0',
  };

  return (
    <div className='main'>
      <div className='main__column'>
        <div className='main__section main__section-timer'>
          <h3 className='main__timer-title'>До окончания регистрации</h3>
          <span className='main__timer-count'>
            <CountdownTimer targetDate={registrationOverDate} />
          </span>
          <p className='main__timer-text'>Примите вызов, покажите свои идеи и&nbsp;решения, и,&nbsp;возможно, именно ваш проект станет ключом к&nbsp;новым достижениям!</p>
        </div>
        <div className='main__section  main__section-registration'>
          <h3 className='main__timer-title'>Готовы к испытанию?</h3>
          <p className='main__timer-text'>Присоединяйтесь к&nbsp;нам и&nbsp;покажите свои лучшие решения!</p>
          <Button text='Зарегистрироваться' width='full' style={btnStyle} onClick={() => navigate(EROUTES.REGISTRATION)} />
        </div>
      </div>
      <div className='main__column'>
        <div className='main__section main__section-img'> 
          <h1 className='main__title'>Всероссийские&nbsp;транспортные проектные&nbsp;соревнования</h1>
            <div className='main__img'></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
