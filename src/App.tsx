import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import './assets/css/globale.scss'
import MainAdmin from './plateforme/admin/MainAdmin';
import { protectedRouteAdmin } from './plateforme/admin/Routes';
/** */
import MainAuth from './plateforme/auth/MainAuth';
import { routedAuth } from './plateforme/auth/routes';
/** */
import { routedExploitant } from './plateforme/exploitant/Routes';
import MainExploitant from './plateforme/exploitant/MainExploitant';

/**Proprietaire */
import MainProprio from './plateforme/proprietaire/MainProprio';
import { routedProprio } from './plateforme/proprietaire/Routes';

const App: React.FC = () => {
  return (
    <>
      <Routes>

        {/* route accès */}
      
        <Route path="/" element={<MainAuth/>}>
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

          {/* Proprietaire */}
         <Route path="/proprio" element={<MainProprio/>}>
          { routedProprio }
        </Route>

      </Routes>
    </>
  )
}

export default App
