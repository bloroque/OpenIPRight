import React from "react";

import { SignIn, SignUp } from "../IndexPageAuth";

const routerAuth = [
    {name: 'auth', display: true, Path: "/auth" , Element: <SignIn />},

    {name: 'signin', Path: '/auth/signin' , Element: <SignIn />},
    {name: 'signup', Path: '/auth/signup' , Element: <SignUp />},
];

export {routerAuth};