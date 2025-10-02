import type { FC } from 'react';

import CountdownTimer from '../../../../../widgets/CountdownTimer/ui/CountdownTimer';

import '../styles/style.css';

interface IMainProps {
  windowWidth: number;
  onLogin: () => void;
}

/*
const btnStyle = {
  margin: '20px 0 0',
  padding: '12px 34px',
  fontSize: '28px',
  minWidth: '280px',
};

const mobileBtnStyle = {
  margin: '4px auto 8px',
  width: '100%',
  padding: '8px 12px',
};
*/

const Main: FC<IMainProps> = ({ windowWidth }) => {

  return (
    <div className='main'>
      {
        windowWidth > 1000
        ?
        <>
        <div className='main__column'>
          <div className='main__section main__section-registration'>
            <h3 className='main__timer-title'>отборочный этап завершен</h3>
            <span className='main__timer-count'><CountdownTimer targetDate="2025-10-02T10:00:00" /></span>
            <p className='main__timer-text'>Результаты появятся совсем скоро!</p>
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
            <h3 className='main__timer-title'>отборочный этап завершен</h3>
            <span className='main__timer-count'><CountdownTimer targetDate="2025-10-02T10:00:00" /></span>
            <h1 className='main__title'>Международные транспортные проектные&nbsp;cоревнования</h1>
          </div>
          <div className='main__section'>
            <h3 className='main__section-title'>Участвуй в главных транспортных соревнованиях страны!</h3>
            <p className='main__section-text'>Результаты появятся совсем скоро!</p>
          </div>
          
        </>
      }
    </div>
  );
};

export default Main;
