import type { FC } from 'react';
import type { IMainProps } from '../interface/interface';

import { useContext } from 'react';

import { CurrentTeamContext } from '../../../shared/context/team';

import MainLayout from '../../../shared/components/Layout/ui/MainLayout';
import Control from '../../Control/ui/Control';
import Person from '../../Person/ui/Person';

import '../styles/style.css';

const Main: FC<IMainProps> = ({ windowWidth, onChangeStage, onLogout }) => {

  const currentTeam = useContext(CurrentTeamContext);

  console.log(currentTeam);

  return (
    <MainLayout mainContainer={true} windowWidth={windowWidth} onLogout={onLogout} >
      {
        currentTeam.role === 'admin' 
        ?
        <Control />
        :
        <Person windowWidth={windowWidth} onChangeStage={onChangeStage} onLogout={onLogout} />
      }
    </MainLayout>
  );
};

export default Main;
