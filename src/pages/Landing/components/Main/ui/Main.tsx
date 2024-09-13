import type { FC } from 'react';

import Button from '../../../../../shared/components/Button/ui/Button';

import '../styles/style.css';

interface IMainProps {
  windowWidth: number;
  onLogin: () => void;
}

const Main: FC<IMainProps> = ({ windowWidth, onLogin }) => {

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
            <h3 className='main__timer-title'>Регистрация завершена</h3>
            <p className='main__timer-text'>Предложите свои решения —&nbsp;возможно, именно ваш проект станет шагом к&nbsp;успеху!</p>
          </div>
          <div className='main__section  main__section-registration'>
            <h3 className='main__timer-title'>Готовы попробовать свои силы?</h3>
            <p className='main__timer-text'>Присоединяйтесь и&nbsp;покажите, что умеете! </p>
            <Button text='Войти' width='full' style={btnStyle} onClick={onLogin} />
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
            <h3 className='main__timer-title'>Регистрация завершена</h3>
            <h1 className='main__title'>Межвузовские транспортные проектные&nbsp;cоревнования</h1>
          </div>
          <div className='main__section'>
            <h3 className='main__section-title'>Готовы попробовать свои силы?</h3>
            <p className='main__section-text'>Предложите свои решения —&nbsp;возможно, именно ваш проект станет шагом к&nbsp;успеху!</p>
            <Button text='Войти' width='full' style={btnMobileStyle} onClick={onLogin} />
          </div>
          
        </>
      }
    </div>
  );
};

export default Main;
