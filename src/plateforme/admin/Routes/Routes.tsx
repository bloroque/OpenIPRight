
import {
    Dashboard,
    Media,
    Paiement,
    Comptes,
    Historique,
    Permission
} from '../IndexPageAdmin';




const protectedRouterAdmin = [
    {name: "adminRoot", display: true, url: "/admin" , protectedElement: <Dashboard/> },
    { name: 'dashboard', protectedPath: '/admin/dashboard', protectedElement: <Dashboard /> },
    { name: 'media', protectedPath: '/admin/moderation-oeuvres', protectedElement: <Media /> },
    { name: 'payement', protectedPath: '/admin/paiements', protectedElement: <Paiement /> },
    { name: 'comptes', protectedPath: '/admin/gestion-comptes', protectedElement: <Comptes /> },
    { name: 'historique', protectedPath: '/admin/historique-connexion', protectedElement: <Historique /> },
    { name: 'permission', protectedPath: '/admin/roles-permissions', protectedElement: <Permission /> },
    // les autres pages
]

export { protectedRouterAdmin }