import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../../shared/components/Button/ui/Button';
import CountdownTimer from '../../../../../widgets/CountdownTimer/ui/CountdownTimer';
import { EROUTES } from '../../../../../shared/utils/ERoutes';

import '../styles/style.css';

interface IMainProps {
  windowWidth: number;
  onLogin: () => void;
}

const btnStyle = {
  margin: '40px 0 0',
};

const mobileBtnStyle = {
  margin: '20px auto',
  width: '100%',
};

const Main: FC<IMainProps> = ({ windowWidth }) => {

  const navigate = useNavigate();

  const navigateToReg = () => {
    navigate(EROUTES.REGISTRATION);
    window.scrollTo(0, 0);
  };

  const navigateToHistory = () => {
    navigate(EROUTES.HISTORY);
    window.scrollTo(0, 0);
  };

  return (
    <div className='main'>
      {
        windowWidth > 1000
        ?
        <>
        <div className='main__column'>
          <div className='main__section'>
            <h3 className='main__timer-title'>До конца регистрации</h3>
            <span className='main__timer-count'><CountdownTimer targetDate="2025-09-15T12:00:00" /></span>
            <p className='main__timer-text'>Сначала регистрация — потом миллион.</p>
          </div>
          <div className='main__section main__section-registration'>
            <p className='main__timer-text'>Участвуй в главных транспортных соревнованиях страны!</p>
            <p className='main__timer-text'>Разберись с проблемой, которую ещё никто не решил.</p>
            <Button text='Зарегистрироваться' width='default' style={windowWidth > 1000 ? btnStyle : mobileBtnStyle} onClick={navigateToReg} />
            <span onClick={navigateToHistory} className='main__link'>Как это было в 2024 году &rarr;</span>
          </div>
        </div>
        <div className='main__column'>
          <div className='main__section main__section-img'> 
            <h1 className='main__title'>Международные&nbsp;транспортные проектные&nbsp;соревнования</h1>
            <div className='main__img'></div>
          </div>
        </div>
        </>
        :
        <> 
          <div className='main__img'>
            <h3 className='main__timer-title'>До конца отборочного этапа</h3>
            <span className='main__timer-count'><CountdownTimer targetDate="2025-09-15T12:00:00" /></span>
            <h1 className='main__title'>Международные транспортные проектные&nbsp;cоревнования</h1>
          </div>
          <div className='main__section'>
            <h3 className='main__section-title'>Участвуй в главных транспортных соревнованиях страны!</h3>
            <p className='main__section-text'>Разберись с проблемой, которую ещё никто не решил.</p>
            <Button text='Зарегистрироваться' width='default' style={windowWidth > 1000 ? btnStyle : mobileBtnStyle} onClick={navigateToReg} />
            <span onClick={navigateToHistory} className='main__link'>Как это было в 2024 году &rarr;</span>
          </div>
          
        </>
      }
    </div>
  );
};

export default Main;
