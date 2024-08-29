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

import './Landing.css';

interface ILandingProps {
  windowWidth: number;
}

const Landing: FC<ILandingProps> = ({ windowWidth }) => {

  const [cases, setCases] = useState<ICaseItem[]>([]);

  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

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
          <Header windowWidth={windowWidth} />
          <Main windowWidth={windowWidth} />
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
