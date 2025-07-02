import type { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

import icon from '../../../../shared/icons/icon-white.png';

import telegramIcon from '../../../../shared/icons/social-telegram.svg';

import { getCurrentYear } from '../../../../shared/utils/getCurrentYear';

import './Footer.css';

interface IFooterProps {
  windowWidth: number;
}

const Footer: FC<IFooterProps> = ({ windowWidth }) => {

  const { t } = useTranslation();

  return (
    <footer className='i-footer' id='footer'>
      <div className='i-footer__container'>
        <h2 className='i-footer__title'>{t('footer-title')}</h2>
        <div className='i-footer__social'>
          <a className='i-footer__social-link' href='https://t.me/contestmiit' target='_blank'>
            <img className='i-footer__social-icon' src={telegramIcon} alt={'icon'} />
          </a>
          <span className='i-footer__social-text'>{t('footer-subtitle')}</span>
        </div>
        <div className='i-footer__bottom'>
          {
            windowWidth > 1000 && <img className='i-footer__icon' src={icon} alt='логотип'></img>
          }
          <div className='i-footer__navigation'>
            <Link className='i-header__item' to='description' smooth={true} offset={0} duration={1750} spy={true}>{t('nav.0')}</Link>
            <Link className='i-header__item' to='methodology' smooth={true} offset={-40} duration={1250} spy={true}>{t('nav.1')}</Link>
            <Link className='i-header__item' to='task' smooth={true} offset={0} duration={1000} spy={true}>{t('nav.2')}</Link>
            <Link className='i-header__item' to='document' smooth={true} offset={-40} duration={750} spy={true}>{t('nav.3')}</Link>
          </div>
        </div>
        <p className='i-footer__copy'>&copy; {getCurrentYear()}, {t('footer-copy')}</p>
      </div>
    </footer>
  );
};

export default Footer;
