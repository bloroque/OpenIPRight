import React, {useState, useEffect} from "react";
import SidebarPage from "../SidebarPage";
import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";

interface MainPageProps {
    children?: React.ReactNode;
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {

    const [collapsed, setCollapsed] = useState(() => {
        try {
            const isCollapsedSidebar = localStorage.getItem('isCollapsed');
            return isCollapsedSidebar ? JSON.parse(isCollapsedSidebar) : false;
        } catch (error) {
            if (error instanceof Error)
                throw new Error(`Erreur : ${error.message}`);

            return false;
        }
    });

    useEffect(() => {
        localStorage.setItem('isCollapsed', collapsed);
    }, [collapsed]);

    return (
        <div className="flex h-screen overflow-hidden bg-stone-200">
            <SidebarPage collapsed={collapsed} setCollapsed={setCollapsed} />
            <main className="flex-1">
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