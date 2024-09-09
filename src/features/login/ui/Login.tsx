import type { FC } from 'react';
import type { ILoginData } from '../interface/interface';
import type { IFormError } from '../../../shared/components/Form/interface/interface';

import { useState } from 'react';

import Button from '../../../shared/components/Button/ui/Button';
import LoginPopup from './LoginPopup';

interface ILogin {
  onLogin: (data: ILoginData) => void;
  isShowLoginError: IFormError;
  isLoadingRequest: boolean;
}

const Login: FC<ILogin> = ({ onLogin, isShowLoginError, isLoadingRequest }) => {

  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(false);

  const openLoginPopup = () => {
    setIsOpenLoginPopup(true);
  };

  const closePopup = () => {
    setIsOpenLoginPopup(false);
  };

  return (
    <div>
      <Button text='Войти' onClick={openLoginPopup} />
      {
        isOpenLoginPopup &&
        <LoginPopup 
          isOpen={isOpenLoginPopup}
          onClose={closePopup}
          onSubmit={onLogin}
          loginError={isShowLoginError}
          isLoadingRequest={isLoadingRequest}
        />
      }
    </div>
  );
};

export default Login; 
