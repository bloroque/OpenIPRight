import React from "react";
import { Outlet } from "react-router-dom"; 
import MainPage from './Layouts/MainPage';

const MainProducteur: React.FC = () => {
    return (
        <MainPage>
            <Outlet/>
        </MainPage>
    )
};

export default MainProducteur;