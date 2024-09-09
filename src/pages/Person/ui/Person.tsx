import type { FC } from 'react';
import type { IPersonProps, IStage, IStageNavItem } from '../interface/interface';

import { useState, useEffect, useContext } from 'react';

import * as api from '../../../shared/utils/api';
import { CurrentTeamContext } from '../../../shared/context/team';

import MainLayout from '../../../shared/components/Layout/ui/MainLayout';
import Preloader from '../../../shared/components/Preloader/ui/Preloader';
import PersonNavigation from '../components/PersonNavigation/ui/PersonNavigation';
import PersonContainer from '../components/PersonContainer/ui/PersonContainer';
import PersonStage from '../components/PersonStage/ui/PersonStage';
import PersonStageInitial from '../components/PersonStage/ui/PersonStageInitial';

import '../styles/style.css';

const Person: FC<IPersonProps> = ({ windowWidth, onLogout }) => {

  const initialStage = { 
    name: 'Информация о кейсе',  
    id: 0, 
    is_active: true, 
    position: 0, 
    view: 'info', 
    type: 'active', 
  };

  const currentTeam = useContext(CurrentTeamContext);

  const [stages, setStages] = useState<IStageNavItem[]>([initialStage]);
  const [currentStage, setCurrentStage] = useState<IStageNavItem>(initialStage);
  const [openStageId, setOpenStageId] = useState<number>(initialStage.id);

  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [isLoadingStage, setIsLoadingStage] = useState<boolean>(false);

  const toggleStage = (stage: IStageNavItem) => {
    setOpenStageId(stage.id);
    if (stage.id === 0) {
      setCurrentStage(initialStage);
      setOpenStageId(initialStage.id);
    } else {
      setIsLoadingStage(true);
      const token = localStorage.getItem('token');
      if (token) {
        api.getStage(token, stage.id)
        .then((res) => {
          setCurrentStage(res);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => setIsLoadingStage(false));
      }
    }
  };

  const getData = () => {
    setIsLoadingData(true);
    const token = localStorage.getItem('token');
    if (token) {
      api.getStages(token)
      .then((res) => {
        const newStages = res.map((elem: IStage) => ({ ...elem, view: 'stage', type: currentTeam.current_stage >= elem.id ? 'default' : 'block' }));
        setStages([...stages, ...newStages]);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoadingData(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {
      isLoadingData
      ?
      <Preloader />
      :
      <MainLayout mainContainer={false} windowWidth={windowWidth} onLogout={onLogout} >
        <div className='person'>
          <PersonNavigation stages={stages} openStageId={openStageId} onChange={toggleStage} /> 
          <PersonContainer>
            {
              isLoadingStage
              ?
              <Preloader />
              :
              <>
              {
                currentStage.view === 'info'
                ?
                <PersonStageInitial stage={currentStage} />
                :
                <PersonStage stage={currentStage} />
              }
              </>
            }
          </PersonContainer>
        </div>
      </MainLayout>
    }
    </>
  );
};

export default Person;
