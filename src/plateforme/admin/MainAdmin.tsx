import React from "react";
import { Outlet } from "react-router-dom"; 
import MainPage from './Layouts/MainPage/index';

const MainAdmin: React.FC = () => {
    return (
        <MainPage>
            <Outlet/>
        </MainPage>
    )
};

export default MainAdmin;