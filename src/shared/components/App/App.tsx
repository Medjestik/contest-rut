import './App.css';

import { Routes, Route } from 'react-router-dom';

import Landing from '../../../pages/Landing/Landing';
import Registration from '../../../pages/Registration/ui/Registration';
import { EROUTES } from '../../utils/ERoutes';

function App() {
  
  return (
    <div className='page'>

      <Routes>
        <Route path={EROUTES.LANDING} element={<Landing />} />
        <Route path={EROUTES.REGISTRATION} element={<Registration />} />
      </Routes>
      
    </div>
  );
}

export default App;
