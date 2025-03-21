
import {
    Dashboard
} from '../IndexPageAdmin';

const protectedRouterAdmin = [
    {name: "adminRoot", display: true, url: "/admin" , protectedElement: <Dashboard/> },
    { name: 'dashboard', protectedPath: '/admin/dashboard', protectedElement: <Dashboard /> },
    // les autres pages
]

export { protectedRouterAdmin }