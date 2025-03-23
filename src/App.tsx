import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import MainAdmin from './plateforme/admin/MainAdmin';
import { protectedRouteAdmin } from './plateforme/admin/Routes';
import MainProducteur from './plateforme/Producteur/MainProducteur';
import { protectedRouteProducteur } from './plateforme/Producteur/Routes';



const App: React.FC = () => {
  return (
    <>
      <Routes>
        
        {/* Les routes admin */}
          <Route path="/admin" element={<MainAdmin/>}>
            { protectedRouteAdmin }
          </Route>

        {/* Les routes Expoitant Oeuvre */}
          {/* <Route path="/exploitant" element={<MainExploitant/>}>
            { protectedRouteExploitant }
          </Route> */}

         {/* Les routes proprietaire Oeuvre */}
          <Route path="/producteur" element={<MainProducteur/>}>
            { protectedRouteProducteur }
          </Route>

      </Routes>
    </>
  )
}

export default App
