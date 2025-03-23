import React from "react";
import { Outlet } from "react-router-dom"; 
import MainPage from './Layouts/MainPage/index';

const MainProprio: React.FC = () => {
    return (
        <MainPage>
            <Outlet/>
        </MainPage>
    )
};

export default MainProprio;