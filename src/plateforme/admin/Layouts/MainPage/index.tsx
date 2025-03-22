import React, { useState, useEffect } from "react";

import SidebarPage from "../SidebarPage";
import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";

interface MainPageProps {
    children?: React.ReactNode;
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(() => {
        try {
            const isCollapsedSidebar = localStorage.getItem('isCollapsed');
            return isCollapsedSidebar ? JSON.parse(isCollapsedSidebar) : false;
        } catch (error) {
            console.error("Erreur de récupération localStorage :", error);
            return false;
        }
    });

    useEffect(() => {
        localStorage.setItem('isCollapsed', JSON.stringify(collapsed));
    }, [collapsed]);

    return (
        <div className="flex h-screen overflow-hidden">
            <SidebarPage collapsed={collapsed} setCollapsed={setCollapsed} />
            <main className="flex-1 h-full overflow-hidden relative transition duration-[.5s,.5s]">
                <HeaderPage />
                <div className="relative w-full" style={{ height: 'calc(100% - 4.724rem)' }}>
                    {children}
                </div>
                <FooterPage />
            </main>
        </div>
    );
};

export default MainPage;