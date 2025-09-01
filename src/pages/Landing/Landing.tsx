import { useState, useEffect, type FC } from 'react';
import type { ICaseItem } from '../../features/case/interface/interface';
 
import PublicLayout from '../../shared/components/Layout/ui/PublicLayout';
import Header from './components/Header/ui/Header';
import Main from './components/Main/ui/Main';
import Description from './components/Description/ui/Description';
import Prize from './components/Prize/ui/Prize';
import Stages from './components/Stages/ui/Stages';
import Final from '../History/components/FInal/Final';
import Cases from './components/Cases/ui/Cases';
import Recruitment from './components/Recruitment/ui/Recruitment';
import Motivation from './components/Motivation/ui/Motivation';
import FAQ from './components/FAQ/ui/FAQ';
import Document from './components/Document/ui/Document';
import Footer from './components/Footer/ui/Footer';
import MobileMenu from './components/MobileMenu/ui/MobileMenu';
import Preloader from '../../shared/components/Preloader/ui/Preloader';

import * as api from '../../shared/utils/api';

import './Landing.css';

interface ILandingProps {
  windowWidth: number;
  onLogin: () => void;
}

const Landing: FC<ILandingProps> = ({ windowWidth, onLogin }) => {

  const [cases, setCases] = useState<ICaseItem[]>([]);

  const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  const toggleMobileMenu = () => {
    setIsShowMobileMenu(!isShowMobileMenu);
  };

  const getData = () => {
    setIsLoadingData(true);
    api.getCases()
      .then((res) => {
        setCases(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoadingData(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PublicLayout>
      <div className='landing'>
        {
          isLoadingData
          ?
          <Preloader />
          :
          <>
          {
            windowWidth < 1001 &&
            <MobileMenu isShow={isShowMobileMenu} onClose={toggleMobileMenu} />
          }
          <Header windowWidth={windowWidth} showMobileMenu={toggleMobileMenu} />
          <Main windowWidth={windowWidth} onLogin={onLogin} />
          {
            /*
              <LeaderBoard windowWidth={windowWidth} />
            */
          }
          <Description windowWidth={windowWidth} />
          <Prize windowWidth={windowWidth} />
          <Stages />
          <Final type='land' />
          <Cases cases={cases} />
          <Motivation windowWidth={windowWidth} />
          <Recruitment />
          <FAQ />
          <Document />
          <Footer windowWidth={windowWidth} />
          </>
        }
      </div>
    </PublicLayout>
  );
};

export default Landing;
