import React from "react";
import { Outlet } from "react-router-dom";


const MainAuthPage:React.FC = () => {

    return (
        <>
            <div className="w-full h-full overflow-hidden relative flex flex-row">
                <Outlet/>
            </div>
        </>
    );
}

export default MainAuthPage;