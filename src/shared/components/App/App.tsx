import './App.css';

import type { ILoginData } from '../../../features/login/interface/interface';
import type { IFormError } from '../Form/interface/interface';

import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Landing from '../../../pages/Landing/Landing';
import Registration from '../../../pages/Registration/ui/Registration';
import Person from '../../../pages/Person/ui/Person';
import Login from '../../../features/login/ui/Login';
import Preloader from '../Preloader/ui/Preloader';
import { EROUTES } from '../../utils/ERoutes';
import { initialTeam, CurrentTeamContext } from '../../context/team';

import * as api from '../../../shared/utils/api';

function App() {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [currentTeam, setCurrentTeam] = useState(initialTeam);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(false);

  const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);
  const [isShowLoginError, setIsShowLoginError] = useState<IFormError>({ text: '', isShowError: false });

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoadingPage(true);
      api.getTeam(token)
      .then((res) => {
        setCurrentTeam(res);
        setLoggedIn(true);
        navigate('/person-test');
        console.log(res);
      })
      .catch((err) => {
        setLoggedIn(false);
        console.error(err);
      })
      .finally(() => setIsLoadingPage(false));
    } else {
      if (pathname !== EROUTES.REGISTRATION) {
        // navigate(EROUTES.LANDING);
      }
      setIsLoadingPage(false);
    }
  };

  const handleLogin = (data: ILoginData) => {
    setIsLoadingRequest(true);
    setIsShowLoginError({ text: '', isShowError: false });
    api.login(data)
    .then((res) => {
      localStorage.setItem('token', res.key);
      tokenCheck();
    })
    .catch((err) => {
      if (err.status === 400) {
        setIsShowLoginError({ text: 'Неправильный логин или пароль!', isShowError: true });
      } else {
        setIsShowLoginError({ text: 'К сожалению произошла ошибка! Обратитесь в техническую поддержку.', isShowError: true });
      }
      console.error(err);
    })
    .finally(() => setIsLoadingRequest(false));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate(EROUTES.LANDING);
  };

  useEffect(() => {
    // tokenCheck();
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
            <Route path={EROUTES.LANDING} element={<Landing windowWidth={windowWidth} />} />
            <Route path={EROUTES.REGISTRATION} element={<Registration windowWidth={windowWidth} />} />
            {
              loggedIn &&
              <Route path={EROUTES.PERSON} element={<Person windowWidth={windowWidth} onLogout={handleLogout} />} />
            }
            <Route path={EROUTES.LOGIN} element={<Login onLogin={handleLogin} isLoadingRequest={isLoadingRequest} isShowLoginError={isShowLoginError} />} />
          </Routes>
        } 
      </div>
    </CurrentTeamContext.Provider>
  );
}

export default App;
