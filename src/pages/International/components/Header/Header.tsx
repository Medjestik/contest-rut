import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

import icon from '../../../../shared/icons/icon-white.png';

import './Header.css';

const Header = () => {

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
 
  return (
    <header className='i-header'>
      <img className='i-header__logo' src={icon} alt='лого'></img>
      <nav className='i-header__nav'>
        <div className='i-header__list'>
          <Link className='i-header__item' to='description' smooth={true} offset={-20} duration={500} spy={true}>{t('nav.0')}</Link>
          <Link className='i-header__item' to='methodology' smooth={true} offset={-40} duration={750} spy={true}>{t('nav.1')}</Link>
          <Link className='i-header__item' to='task' smooth={true} offset={0} duration={1000} spy={true}>{t('nav.2')}</Link>
          <Link className='i-header__item' to='document' smooth={true} offset={-40} duration={1250} spy={true}>{t('nav.3')}</Link>
          <Link className='i-header__item' to='footer' smooth={true} offset={-40} duration={1750} spy={true}>{t('nav.4')}</Link>
        </div>
      </nav>
      <ul className='i-header__lang'>
        {['ru', 'en', 'cn', 'fr'].map((lng) => (
          <li
            key={lng}
            className={`i-header__lang-item${i18n.language === lng ? ' active' : ''}`}
            onClick={() => handleChangeLanguage(lng)}
          >
            {lng.toUpperCase()}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
