import type { FC } from 'react';

import { Link } from 'react-scroll';
import icon from '../../../../shared/icons/icon-white.png';

import telegramIcon from '../../../../shared/icons/social-telegram.svg';

import { getCurrentYear } from '../../../../shared/utils/getCurrentYear';

import './Footer.css';

interface IFooterProps {
  windowWidth: number;
}

const Footer: FC<IFooterProps> = ({ windowWidth }) => {
  return (
    <footer className='h-footer' id='footer'>
      <div className='h-footer__container'>
        <h2 className='h-footer__title'>Подпишись!</h2>
        <div className='h-footer__social'>
          <a className='h-footer__social-link' href='https://t.me/contestmiit' target='_blank'>
            <img className='h-footer__social-icon' src={telegramIcon} alt={'icon'} />
          </a>
          <span className='h-footer__social-text'>на Telegram-канал соревнований, чтобы не пропустить новый сезон</span>
        </div>
        <div className='h-footer__bottom'>
          {
            windowWidth > 1000 && <img className='h-footer__icon' src={icon} alt='логотип'></img>
          }
          <div className='h-footer__navigation'>
            <Link className='h-header__item' to='stages' smooth={true} offset={0} duration={1750} spy={true}>Этапы</Link>
            <Link className='h-header__item' to='cases' smooth={true} offset={0} duration={1250} spy={true}>Кейсы</Link>
            <Link className='h-header__item' to='final' smooth={true} offset={0} duration={1000} spy={true}>Финал</Link>
            <Link className='h-header__item' to='prize' smooth={true} offset={0} duration={750} spy={true}>Призы</Link>
            <Link className='h-header__item' to='news' smooth={true} offset={0} duration={500} spy={true}>СМИ</Link>
          </div>
        </div>
        <p className='h-footer__copy'>&copy; {getCurrentYear()}, Все права защищены РУТ (МИИТ)</p>
      </div>
    </footer>
  );
};

export default Footer;
