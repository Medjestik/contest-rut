import './App.css';

import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import Landing from '../../../pages/Landing/Landing';
import Registration from '../../../pages/Registration/ui/Registration';
import { EROUTES } from '../../utils/ERoutes';

function App() {

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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
    <div className='page'>

      <Routes>
        <Route path={EROUTES.LANDING} element={<Landing windowWidth={windowWidth} />} />
        <Route path={EROUTES.REGISTRATION} element={<Registration />} />
      </Routes>
      
    </div>
  );
}

export default App;
