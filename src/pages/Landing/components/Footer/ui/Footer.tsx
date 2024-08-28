import type { FC } from 'react';

import icon from '../../../../../shared/icons/icon-white.png';
import iconRUT from '../../../../../shared/icons/logo-rut-white.svg';

import { ESOCIAL } from '../interface/interface';
import FooterSocialLink from './FooterSocialLink';
import Navigation from '../../../../../shared/components/Navigation/ui/Navigation';
import { getCurrentYear } from '../../../../../shared/utils/getCurrentYear';
import { NavFooterLinks } from '../../../../../shared/components/Navigation/interface/interface';

import '../styles/style.css';

const Footer: FC = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='footer__container'>
        <h2 className='footer__title'>Остались вопросы? Задайте их нам!</h2>
        <div className='footer__social'>
            <FooterSocialLink type={ESOCIAL.TELEGRAM} />
            <FooterSocialLink type={ESOCIAL.VK} />
            <FooterSocialLink type={ESOCIAL.MAIL} />
            <p className='footer__support'>
              При проблемах с регистрацией 
              <br></br> 
              обращайтесь в <span className='footer__support-link'>техническую поддержку</span>.
            </p>
        </div>
        <div className='footer__bottom'>
          <img className='footer__icon' src={icon} alt='логотип'></img>
          <img className='footer__icon footer__icon-rut' src={iconRUT} alt='логотип'></img>
          <div className='footer__navigation'><Navigation links={NavFooterLinks} color='white' /></div>
        </div>
        <p className='footer__copy'>&copy; {getCurrentYear()}, Все права защищены РУТ (МИИТ)</p>
      </div>
    </footer>
  );
};

export default Footer;
