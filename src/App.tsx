import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import MainAdmin from './plateforme/admin/MainAdmin';
import { protectedRouteAdmin } from './plateforme/admin/Routes';
/** */
import MainAuth from './plateforme/auth/MainAuth';
import { routedAuth } from './plateforme/auth/routes';
/** */
import { routedExploitant } from './plateforme/exploitant/Routes';
import MainExploitant from './plateforme/exploitant/MainExploitant';



const App: React.FC = () => {
  return (
    <>
      <Routes>

        <Route path="/auth" element={<MainAuth/>}>
          {routedAuth}
        </Route>

        {/* Les routes admin */}
        <Route path="/admin" element={<MainAdmin/>}>
          { protectedRouteAdmin }
        </Route>

        {/* Les routes Expoitant Oeuvre */}

        <Route path="/exploitant" element={<MainExploitant/>}>
          { routedExploitant }
        </Route>

         {/* Les routes proprietaire Oeuvre */}


      </Routes>
    </>
  )
}

export default App
