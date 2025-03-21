import React from "react";

import { SignIn, SignUp } from "../IndexPageAuth";

const routerAuth = [
    {name: 'auth', display: true, Path: "/auth" , Element: <SignIn />},

    {name: 'signup', Path: '/auth/singin' , Element: <SignIn />},
    {name: 'signup', Path: '/auth/singup' , Element: <SignUp />},
];

export {routerAuth};