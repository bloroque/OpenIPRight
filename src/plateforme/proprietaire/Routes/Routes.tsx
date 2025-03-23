import React from "react";

import {    Dashboard,
            News,
            Marketplace,
            Library,
            Transaction,
            Setting } from "../IndexPageProprio";



const routerProprio = [
    {name: 'ProprioRoot', display: true, Path: "/proprio" , Element: <Dashboard />},
    {name: 'dashboard', Path: "/proprio/dashboard" , Element: <Dashboard />},
    {name: 'MarketPlace', Path: "/proprio/marketplace" , Element: <Marketplace />},
    {name: 'News', Path: "/proprio/news" , Element: <News />},
    {name: 'Library',  Path: "/proprio/library" , Element: <Library />},
    {name: 'Transaction', Path: "/proprio/transaction" , Element: <Transaction />},
    {name: 'Setting', Path: "/proprio/setting" , Element: <Setting />},


];

export {routerProprio};