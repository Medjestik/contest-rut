import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import Icon from '../../../../Icon/ui/Icon';

import icon from '../../../../../icons/icon.svg';
import logoRUT from '../../../../../icons/logo-rut.svg';

import { EROUTES } from '../../../../../utils/ERoutes';

import '../styles/style.css';

interface ILayoutHeaderProps {
  windowWidth: number;
}


const LayoutHeader: FC<ILayoutHeaderProps> = ({ windowWidth }) => {
  const navigate = useNavigate();

  return (
    <header className='layout-header'>
      <div className='layout-header__icons'>
        <img className='layout-header__icon' src={icon} alt='логотип'></img>
        <img className='layout-header__icon layout-header__icon-rut' src={logoRUT} alt='логотип'></img>
      </div>
      {
        windowWidth > 1000
        ?
        <button className='layout-header__btn' type='button' onClick={() => navigate(EROUTES.LANDING)}>На главную</button>
        :
        <Icon type='home' onClick={() => navigate(EROUTES.LANDING)} />
      }
      
    </header>
  );
};

export default LayoutHeader;
