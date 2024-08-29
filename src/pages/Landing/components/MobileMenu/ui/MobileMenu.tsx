import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import '../styles/style.css';

const MobileMenu: FC = () => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div className='mobile-menu'>

    </div>
  );
};

export default MobileMenu;
