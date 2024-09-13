import { useEffect, useState, type FC } from 'react';
import type { ICaseItem } from '../../features/case/interface/interface';

import * as api from '../../shared/utils/api';

import PublicLayout from '../../shared/components/Layout/ui/PublicLayout';
import Header from './components/Header/ui/Header';
import Main from './components/Main/ui/Main';
import Description from './components/Description/ui/Description';
import Stages from './components/Stages/ui/Stages';
import Cases from './components/Cases/ui/Cases';
import Recruitment from './components/Recruitment/ui/Recruitment';
import FAQ from './components/FAQ/ui/FAQ';
import Document from './components/Document/ui/Document';
import Footer from './components/Footer/ui/Footer';
import Preloader from '../../shared/components/Preloader/ui/Preloader';
import MobileMenu from './components/MobileMenu/ui/MobileMenu';

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

  const getCases = () => {
    setIsLoadingData(true);
    api.getCases()
    .then((res: ICaseItem[]) => {
      setCases(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoadingData(false));
  };

  useEffect(() => {
    getCases();
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
          <Description windowWidth={windowWidth} />
          <Stages />
          <Cases cases={cases} />
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
