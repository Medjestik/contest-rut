import type { FC } from 'react';
import '../../i18n.js';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Description from './components/Description/Description';
import Final from './components/Final/Final';
import Methodology from './components/Methodology/Methodology';
import Faq from './components/Faq/Faq';

import './International.css';

interface IInternationalProps {
  windowWidth: number;
}

const International: FC<IInternationalProps> = ({ windowWidth }) => {

  console.log(windowWidth);

  return (  
    <div className='international'>
      <div className='international__container'>
        <Header />
        <Main />
        <Description />
        <Final />
        <Methodology />
        <Faq />
      </div>
    </div>
  );
};

export default International;
