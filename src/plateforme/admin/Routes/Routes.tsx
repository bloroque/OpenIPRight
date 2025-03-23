
import {
    Dashboard,
    Client
} from '../IndexPageAdmin';

const protectedRouterAdmin = [
    // url : "/admin"
    {name: "adminRoot", display: true, path: "/admin" , protectedElement: <Dashboard/> },
    { name: 'dashboard', protectedPath: '/admin/dashboard', protectedElement: <Dashboard /> },

    { name: "client", protectedPath: '/admin/client', protectedElement: <Client />}
    // les autres pages
]

export { protectedRouterAdmin }