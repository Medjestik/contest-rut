import type { FC } from 'react';
import type { IPersonProps, IStage, IStageNavItem } from '../interface/interface';
import type { IUploadFile, IUploadLink } from '../../../shared/components/Popup/interface/interface';

import { useState, useEffect, useContext } from 'react';

import * as api from '../../../shared/utils/api';
import { CurrentTeamContext } from '../../../shared/context/team';

import MainLayout from '../../../shared/components/Layout/ui/MainLayout';
import Preloader from '../../../shared/components/Preloader/ui/Preloader';
import PersonNavigation from '../components/PersonNavigation/ui/PersonNavigation';
import PersonContainer from '../components/PersonContainer/ui/PersonContainer';
import PersonStage from '../components/PersonStage/ui/PersonStage';
import PersonStageInitial from '../components/PersonStage/ui/PersonStageInitial';
import UploadFilePopup from '../../../shared/components/Popup/ui/UploadFilePopup';
import UploadLinkPopup from '../../../shared/components/Popup/ui/UploadLinkPopup';

import '../styles/style.css';

const Person: FC<IPersonProps> = ({ windowWidth, onLogout, onChangeStage }) => {

  const initialStage = { 
    name: 'Информация о кейсе',  
    id: 0, 
    is_active: true, 
    position: 0, 
    view: 'info', 
    type: 'active',
    url_template: '',
    url_video: '',
    team_file_count: 0, 
  };

  const currentTeam = useContext(CurrentTeamContext);

  const [stages, setStages] = useState<IStageNavItem[]>([initialStage]);
  const [currentStage, setCurrentStage] = useState<IStageNavItem>(initialStage);
  const [openStageId, setOpenStageId] = useState<number>(initialStage.id);

  const [isOpenUploadFilePopup, setIsOpenUploadFilePopup] = useState<boolean>(false);
  const [isOpenUploadLinkPopup, setIsOpenUploadLinkPopup] = useState<boolean>(false);

  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [isLoadingStage, setIsLoadingStage] = useState<boolean>(false);
  const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);
  const [isShowRequestError, setIsShowRequestError] = useState<boolean>(false);

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

  const handleNextStage = () => {
    const token = localStorage.getItem('token');
    if (token) {
      api.nextStage(token)
      .then((res) => {
        console.log(res.current_stage);
        onChangeStage(res.current_stage.id);
        const newStages = stages.map((elem: IStageNavItem) => ({ ...elem, type: res.current_stage.id >= elem.id ? 'default' : 'block' }));
        setStages(newStages);
        toggleStage(res.current_stage);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  };

  const handleUploadFile = (file: IUploadFile) => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsShowRequestError(false);
      setIsLoadingRequest(true);
      api.uploadFile(token, file, openStageId)
      .then(() => {
        setCurrentStage({ ...currentStage, team_file_count: currentStage.team_file_count + 1 });
        closePopup();
      })
      .catch((err) => {
        setIsShowRequestError(true);
        console.error(err);
      })
      .finally(() => setIsLoadingRequest(false));
    }
  };

  const handleUploadLink = (data: IUploadLink) => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsShowRequestError(false);
      setIsLoadingRequest(true);
      api.uploadLink(token, data, openStageId)
      .then(() => {
        setCurrentStage({ ...currentStage, team_file_count: currentStage.team_file_count + 1 });
        closePopup();
      })
      .catch((err) => {
        setIsShowRequestError(true);
        console.error(err);
      })
      .finally(() => setIsLoadingRequest(false));
    }
  };

  const openUploadFilePopup = () => {
    setIsOpenUploadFilePopup(true);
  };

  const openUploadLinkPopup = () => {
    setIsOpenUploadLinkPopup(true);
  };

  const closePopup = () => {
    setIsShowRequestError(false);
    setIsOpenUploadFilePopup(false);
    setIsOpenUploadLinkPopup(false);
  };
 
  const getData = () => {
    setIsLoadingData(true);
    const token = localStorage.getItem('token');
    if (token) {
      api.getStages(token)
      .then((res) => {
        const newStages = res.map((elem: IStage) => ({ ...elem, view: 'stage', type: currentTeam.current_stage >= elem.id ? 'default' : 'block' }));
        setStages([initialStage, ...newStages]);
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
              <PersonStage stage={currentStage} onOpen={openUploadFilePopup} onLink={openUploadLinkPopup} onChangeStage={handleNextStage}  />
            }
            </>
          }
        </PersonContainer>
      </div>
      {
        isOpenUploadFilePopup &&
        <UploadFilePopup 
          isOpen={isOpenUploadFilePopup}
          isLoading={isLoadingRequest}
          isShowRequestError={isShowRequestError}
          onClose={closePopup}
          onUpload={handleUploadFile}
        />
      }
      {
        isOpenUploadLinkPopup &&
        <UploadLinkPopup 
          isOpen={isOpenUploadLinkPopup}
          isLoading={isLoadingRequest}
          isShowRequestError={isShowRequestError}
          onClose={closePopup}
          onUpload={handleUploadLink}
        />
      }
    </MainLayout>
  );
};

export default Person;
