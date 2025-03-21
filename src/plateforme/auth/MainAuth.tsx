import React, {  useEffect } from 'react';
import MainPage from './Layouts/MainPage';
import { Outlet } from 'react-router-dom';

const MainAuth: React.FC = () => {
  useEffect(() => {
  
  },[]);

  return (
    <MainPage>
      <Outlet/>
    </MainPage>
  );
}

export default MainAuth;