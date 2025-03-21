
import {
    Dashboard,
    Client
} from '../IndexPageAdmin';

const protectedRouterAdmin = [
    {name: "adminRoot", display: true, url: "/admin" , protectedElement: <Dashboard/> },
    { name: 'dashboard', protectedPath: '/admin/dashboard', protectedElement: <Dashboard /> },

    { name: "client", protectedPath: '/admin/client', protectedElement: <Client />}
    // les autres pages
]

export { protectedRouterAdmin }