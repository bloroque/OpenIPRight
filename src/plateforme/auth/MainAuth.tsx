import React from 'react';
import { Outlet } from 'react-router-dom';
import MainAuthPage from './Layouts/MainAuthPage';

const MainAuth: React.FC = () => {

  return (
    <MainAuthPage>
      <Outlet/>
    </MainAuthPage>
  );
}

export default MainAuth;