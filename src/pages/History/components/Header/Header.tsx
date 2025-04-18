import { Link } from 'react-scroll';

import icon from '../../../../shared/icons/icon-white.png';

import './Header.css';

const Header = () => {
  return (
    <header className='h-header'>
      <img className='h-header__logo' src={icon} alt='лого'></img>
      <nav className='h-header__nav'>
        <div className='h-header__list'>
          <Link className='h-header__item' to='stages' smooth={true} offset={0} duration={500} spy={true}>Этапы</Link>
          <Link className='h-header__item' to='cases' smooth={true} offset={0} duration={750} spy={true}>Кейсы</Link>
          <Link className='h-header__item' to='final' smooth={true} offset={0} duration={1000} spy={true}>Финал</Link>
          <Link className='h-header__item' to='prize' smooth={true} offset={0} duration={1250} spy={true}>Призы</Link>
          <Link className='h-header__item' to='news' smooth={true} offset={0} duration={1750} spy={true}>СМИ</Link>
        </div>
      </nav>
      <a className='h-header__button' target='_blank' rel='norefferer' href='https://t.me/contestmiit'>Telegram-канал</a>
    </header>
  );
};

export default Header;
