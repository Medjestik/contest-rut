import './App.css';

import type { ILoginData } from '../../../features/login/interface/interface';
import type { IFormError } from '../Form/interface/interface';
import type { ICurrentTeam } from './interface';

import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Landing from '../../../pages/Landing/Landing';
import History from '../../../pages/History/History';
import International from '../../../pages/International/International';
import Login from '../../../pages/Login/ui/Login';
import Main from '../../../pages/Main/ui/Main';
import Preloader from '../Preloader/ui/Preloader';
import { EROUTES } from '../../utils/ERoutes';
import { initialTeam, CurrentTeamContext } from '../../context/team';
import LoginPopup from '../../../features/login/ui/LoginPopup';

import * as api from '../../../shared/utils/api';

function App() {

  const navigate = useNavigate();

  const [currentTeam, setCurrentTeam] = useState<ICurrentTeam>(initialTeam);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);
  const [isShowLoginError, setIsShowLoginError] = useState<IFormError>({ text: '', isShow: false });

  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(false);

  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(false);

  const openLoginPopup = () => {
    setIsOpenLoginPopup(true);
  };

  const closePopup = () => {
    setIsOpenLoginPopup(false);
  };

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoadingPage(true);
      api.getTeam(token)
        .then((res) => {
          setCurrentTeam(res);
          if (res.role === 'admin' || res.role === 'expert') {
            setLoggedIn(true);

            const currentPath = window.location.pathname;
            const publicRoutes = [
              EROUTES.HOME,
              EROUTES.LOGIN,
              EROUTES.HISTORY,
              EROUTES.INTERNATIONAL,
            ];

            // Если текущий путь публичный — редиректим на MAIN
            if (publicRoutes.includes(currentPath as EROUTES)) {
              navigate(EROUTES.MAIN);
            } else {
              // остаёмся на том же месте
              navigate(currentPath, { replace: true });
            }
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          console.error(err);
        })
        .finally(() => setIsLoadingPage(false));
    }
  };

  const handleChangeStage = (stageId: number) => {
    setCurrentTeam({ ...currentTeam, current_stage: stageId });
  };

  const handleLogin = (data: ILoginData) => {
    setIsLoadingRequest(true);
    setIsShowLoginError({ text: '', isShow: false });
    api.login(data)
    .then((res) => {
      localStorage.setItem('token', res.key);
      tokenCheck();
      closePopup();
    })
    .catch((err) => {
      if (err.status === 400) {
        setIsShowLoginError({ text: 'Неправильный логин или пароль!', isShow: true });
      } else {
        setIsShowLoginError({ text: 'К сожалению произошла ошибка! Обратитесь в техническую поддержку.', isShow: true });
      }
      console.error(err);
    })
    .finally(() => setIsLoadingRequest(false));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate(EROUTES.HOME);
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    function resizeWindow (evt: UIEvent) {
      const target = evt.target as Window;
      setWindowWidth(target.innerWidth);
    }
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);
  
  return (
    <CurrentTeamContext.Provider value={currentTeam}>
      <div className='page'>
        {
          isLoadingPage
          ?
          <Preloader />
          :
          <Routes>
            <Route path={EROUTES.HOME} element={<Landing onLogin={openLoginPopup} windowWidth={windowWidth} />} />
            <Route path={EROUTES.HISTORY} element={<History windowWidth={windowWidth} />} />
            <Route path={EROUTES.INTERNATIONAL} element={<International windowWidth={windowWidth} />} />
            <Route path={EROUTES.LOGIN} element={<Login onLogin={openLoginPopup} />} />
            
            {
              loggedIn &&
              <Route path={`${EROUTES.MAIN}/*`} element={<Main windowWidth={windowWidth} onChangeStage={handleChangeStage} onLogout={handleLogout} />} />
            }
          </Routes>
        }
        {
        isOpenLoginPopup &&
        <LoginPopup 
          isOpen={isOpenLoginPopup}
          onClose={closePopup}
          onSubmit={handleLogin}
          loginError={isShowLoginError}
          isLoadingRequest={isLoadingRequest}
        />
      }
      </div>
    </CurrentTeamContext.Provider>
  );
}

export default App;
