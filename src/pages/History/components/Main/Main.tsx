import { useNavigate } from 'react-router-dom';

import { EROUTES } from '../../../../shared/utils/ERoutes';

import './Main.css';

const Main = () => {

  const navigate = useNavigate();

  const navigateToReg = () => {
    navigate(EROUTES.REGISTRATION);
    window.scrollTo(0, 0);
  };

  return (
    <div className='h-main'>
      <div className='h-main__overlay'>
        <div className='h-main__container'>
          <h1 className='h-main__title'>Международные транспортные проектные соревнования</h1>
          <p className='h-main__subtitle'>Как это было в 2024 году</p>
          <button className='h-main__button' type='button' onClick={navigateToReg}>Зарегистрироваться на новый сезон</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
