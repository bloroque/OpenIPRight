import React, {ReactNode} from "react";
import { Outlet } from "react-router-dom";


interface MainPageProps{
    children?: ReactNode;
}

const MainPage:React.FC<MainPageProps> = () => {
    return (
        <>
            <div className="app">
                <Outlet/>
            </div>
        </>
    );
}

export default MainPage;