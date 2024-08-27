import type { FC } from 'react';
import type { IFooterSocialLinkProps } from '../interface/interface';

import { ESOCIAL } from '../interface/interface';

import telegramIcon from '../../../../../shared/icons/social-telegram.svg';
import vkIcon from '../../../../../shared/icons/social-vk.svg';
import mailIcon from '../../../../../shared/icons/social-mail.svg';

import '../styles/style.css';

const iconMap = {
  [ESOCIAL.TELEGRAM]: telegramIcon,
  [ESOCIAL.VK]: vkIcon,
  [ESOCIAL.MAIL]: mailIcon,
};

const FooterSocialLink: FC<IFooterSocialLinkProps> = ({ type }) => {
  const Icon = iconMap[type];

  return (
    <div className='footer__social-link'>
      <img className='footer__social-icon' src={Icon} alt={`${type} icon`} />
    </div>
  );
};

export default FooterSocialLink;
