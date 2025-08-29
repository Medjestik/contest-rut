import type { FC } from 'react';
import type { IMainProps } from '../interface/interface';

import { useContext } from 'react';

import { CurrentTeamContext } from '../../../shared/context/team';

import MainLayout from '../../../shared/components/Layout/ui/MainLayout';
import Control from '../../Control/ui/Control';

import '../styles/style.css';

const Main: FC<IMainProps> = ({ windowWidth, onLogout }) => {

  const currentTeam = useContext(CurrentTeamContext);

  console.log(currentTeam);

  return (
    <MainLayout mainContainer={true} windowWidth={windowWidth} onLogout={onLogout} >
      {
        currentTeam.role === 'admin' &&
        <Control />
      }
    </MainLayout>
  );
};

export default Main;
