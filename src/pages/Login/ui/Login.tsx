import type { FC } from 'react';

import Button from '../../../shared/components/Button/ui/Button';

interface ILoginProps {
  onLogin: () => void;
}

const Login: FC<ILoginProps> = ({ onLogin }) => {
  return (
    <div>
      <Button text='Вход' onClick={onLogin} />
    </div>
  );
};

export default Login;
