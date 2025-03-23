import { SignIn, SignUp } from "../IndexPageAuth";

const routerAuth = [
    {name: 'auth', display: true, Path: "/" , Element: <SignIn />},
    {name: 'signin', Path: '/signin' , Element: <SignIn />},
    {name: 'signup', Path: '/signup' , Element: <SignUp />},
];

export {routerAuth};