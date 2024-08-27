import type { FC } from 'react';

import { getCurrentYear } from '../../../../../utils/getCurrentYear';

import '../styles/style.css';

const LayoutFooter: FC = () => {
  return (
    <footer className='layout-footer'>
      <span className='layout-footer__copy'>&copy;{getCurrentYear()} Все права защищены, РУТ (МИИТ)</span>
    </footer>
  );
};

export default LayoutFooter;
