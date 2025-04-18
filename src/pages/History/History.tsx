import { type FC } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Stages from './components/Stages/Stages';
import Cases from './components/Cases/Cases';
import News from './components/News/News';
import Video from './components/Video/Video';

interface IHistoryProps {
  windowWidth: number;
}

import './History.css';

const History: FC<IHistoryProps> = ({ windowWidth }) => {

  // const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);

  console.log(windowWidth);

  /* 
  const toggleMobileMenu = () => {
    setIsShowMobileMenu(!isShowMobileMenu);
  };
  */

  return (
    <div className='history'>
      <div className='history__container'>
        <Header />
        <Main />
        <About />
      </div>
      <Stages />
      <div className='history__container'>
        <Cases />
      </div>
      <News />
      <div className='history__container'>
        <Video />
      </div>
    </div>
  );
};

export default History;
