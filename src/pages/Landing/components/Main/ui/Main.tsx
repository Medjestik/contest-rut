import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import CountdownTimer from '../../../../../widgets/CountdownTimer/ui/CountdownTimer';
import Button from '../../../../../shared/components/Button/ui/Button';
import { registrationOverDate } from '../../../../../shared/mock/dates';
import { EROUTES } from '../../../../../shared/utils/ERoutes';

import '../styles/style.css';

interface IMainProps {
  windowWidth: number;
}

const Main: FC<IMainProps> = ({ windowWidth }) => {
  const navigate = useNavigate();

  const btnStyle = {
    margin: '30px 0 0',
  };

  const btnMobileStyle = {
    margin: '16px 0 24px',
  };

  return (
    <div className='main'>
      {
        windowWidth > 1000
        ?
        <>
        <div className='main__column'>
          <div className='main__section main__section-timer'>
            <h3 className='main__timer-title'>До окончания регистрации</h3>
            <span className='main__timer-count'>
              <CountdownTimer targetDate={registrationOverDate} />
            </span>
            <p className='main__timer-text'>Предложите свои решения —&nbsp;возможно, именно ваш проект станет шагом к&nbsp;успеху!</p>
          </div>
          <div className='main__section  main__section-registration'>
            <h3 className='main__timer-title'>Готовы попробовать свои силы?</h3>
            <p className='main__timer-text'>Присоединяйтесь и&nbsp;покажите, что умеете! </p>
            <Button text='Зарегистрироваться' width='full' style={btnStyle} onClick={() => navigate(EROUTES.REGISTRATION)} />
          </div>
        </div>
        <div className='main__column'>
          <div className='main__section main__section-img'> 
            <h1 className='main__title'>Межвузовские&nbsp;транспортные проектные&nbsp;соревнования</h1>
            <div className='main__img'></div>
          </div>
        </div>
        </>
        :
        <> 
          <div className='main__img'>
            <h3 className='main__timer-title'>До окончания регистрации</h3>
            <span className='main__timer-count'>
              <CountdownTimer targetDate={registrationOverDate} />
            </span>
            <h1 className='main__title'>Межвузовские транспортные проектные&nbsp;cоревнования</h1>
          </div>
          <div className='main__section'>
            <h3 className='main__section-title'>Готовы попробовать свои силы?</h3>
            <p className='main__section-text'>Предложите свои решения —&nbsp;возможно, именно ваш проект станет шагом к&nbsp;успеху!</p>
            <Button text='Зарегистрироваться' width='full' style={btnMobileStyle} onClick={() => navigate(EROUTES.REGISTRATION)} />
          </div>
          
        </>
      }
    </div>
  );
};

export default Main;
