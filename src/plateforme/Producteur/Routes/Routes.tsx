
import {
    Dashboard,
    Media,
    Paiement,
    Historique,
    Permission
} from '../IndexPageProducteur';




const protectedRouterProducteur = [
    {name: "producteurRoot", display: true, url: "/producteur" , protectedElement: <Dashboard/> },
    { name: 'dashboard', protectedPath: '/producteur/dashboard', protectedElement: <Dashboard /> },
    { name: 'media', protectedPath: '/producteur/moderation-oeuvres', protectedElement: <Media /> },
    { name: 'payement', protectedPath: '/producteur/paiements', protectedElement: <Paiement /> },
    { name: 'historique', protectedPath: '/producteur/historique-connexion', protectedElement: <Historique /> },
    { name: 'permission', protectedPath: '/producteur/roles-permissions', protectedElement: <Permission /> },
    // les autres pages
]

export { protectedRouterProducteur }