import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import MainAdmin from './plateforme/admin/MainAdmin';
import { protectedRouteAdmin } from './plateforme/admin/Routes';



const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Les routes admin */}
        <Route path="/admin" element={<MainAdmin/>}>
          { protectedRouteAdmin }
        </Route>

        {/* Les routes Expoitant Oeuvre */}

         {/* Les routes proprietaire Oeuvre */}
      </Routes>
    </>
  )
}

export default App
