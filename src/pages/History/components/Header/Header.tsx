import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import icon from '../../../../shared/icons/icon-white.png';

import Button from '../../../../shared/components/Button/ui/Button';
import { EROUTES } from '../../../../shared/utils/ERoutes';

import './Header.css';

const btnLinkStyle = {
  margin: '0',
  width: '94px',
  padding: '10px 12px 6px',
  borderRadius: '12px',
  fontSize: '16px',
  flexShrink: '0',
  color: '#33284C',
};

const Header = () => {

  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(EROUTES.HOME);
  };
  
  return (
    <header className='h-header'>
      <img className='h-header__logo' src={icon} alt='лого'></img>
      <nav className='h-header__nav'>
        <div className='h-header__list'>
          <Link className='h-header__item' to='stages' smooth={true} offset={0} duration={500} spy={true}>Этапы</Link>
          <Link className='h-header__item' to='cases' smooth={true} offset={-40} duration={750} spy={true}>Кейсы</Link>
          <Link className='h-header__item' to='final' smooth={true} offset={0} duration={1000} spy={true}>Финал</Link>
          <Link className='h-header__item' to='prize' smooth={true} offset={-40} duration={1250} spy={true}>Призы</Link>
          <Link className='h-header__item' to='news' smooth={true} offset={-40} duration={1750} spy={true}>СМИ</Link>
        </div>
      </nav>
      <Button text='На главную' color='white' style={btnLinkStyle} onClick={handleBackHome} />
    </header>
  );
};

export default Header;
