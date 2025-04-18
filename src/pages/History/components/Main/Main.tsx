import { useState } from 'react';
import type { ISubscribeData } from '../../../../features/subscribe/interface/interface';

import SubscribePopup from '../../../../features/subscribe/ui/SubscribePopup';
import SubscribeSuccessPopup from '../../../../features/subscribe/ui/SubscribeSuccessPopup';

import * as api from '../../../../shared/utils/api';

import './Main.css';

const Main = () => {

  const [isShowSubscribePopup, setIsShowSubscribePopup] = useState(false);
  const [isShowSubscribeSuccessPopup, setIsShowSubscribeSuccessPopup] = useState(false);
  const [subscribeError, setSubscribeError] = useState({ isShow: false, text: '' });
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);

  const openPopup = () => {
    setIsShowSubscribePopup(true);
  };

  const closePopup = () => {
    setIsShowSubscribePopup(false);
  };

  const openSuccessPopup = () => {
    setIsShowSubscribeSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setIsShowSubscribeSuccessPopup(false);
  };

  const handleSubmit = (data: ISubscribeData) => {
    setIsLoadingRequest(true);
    api.subscribe(data.mail)
    .then(() => {
      setIsShowSubscribePopup(false);
      openSuccessPopup();
    })
    .catch((err) => {
      console.log(err);
      setSubscribeError({ isShow: true, text: 'К сожалению, произошла ошибка!' });
    })
    .finally(() => setIsLoadingRequest(false));
  };

  return (
    <div className='h-main'>
      <div className='h-main__overlay'>
        <div className='h-main__container'>
          <h1 className='h-main__title'>Межвузовские транспортные проектные соревнования</h1>
          <p className='h-main__subtitle'>Как это было в 2024 году</p>
          <button className='h-main__button' type='button' onClick={openPopup}>Успей на новый сезон</button>
        </div>
      </div>
      {
        isShowSubscribePopup &&
        <SubscribePopup 
          isOpen={isShowSubscribePopup}
          onClose={closePopup}
          onSubmit={handleSubmit}
          subscribeError={subscribeError}
          isLoadingRequest={isLoadingRequest}
        />
      }
      {
        isShowSubscribeSuccessPopup &&
        <SubscribeSuccessPopup 
          isOpen={isShowSubscribeSuccessPopup}
          onClose={closeSuccessPopup}
        />
      }
    </div>
  );
};

export default Main;
