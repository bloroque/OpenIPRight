import type React from "react"
import Icon from "../../../../components/custom/LucideIcon"

export interface SidebarItem {
  title: string
  icon?: React.ReactNode
  path?: string
  submenu?: SidebarItem[]
}

export const sidebarData: SidebarItem[] = [
  {
    title: "Tableau de bord",
    icon: <Icon name="LayoutDashboard" />,
    path: "/admin/dashboard",
    //path: "/admin",
  },
  {
    title: "Modération des œuvres",
    icon: <Icon name="LayoutDashboard" />,
    path: "/admin/moderation-oeuvres",
  },
  {
    title: "Suivi & Transactions",
    icon: <Icon name="Receipt" />,
    submenu: [
      {
        title: "Paiements",
        icon: <Icon name="CreditCard" />,
        path: "/admin/paiements",
      },
    ],
  },
  {
    title: "Compte & Utilisateurs",
    icon: <Icon name="Users" />,
    submenu: [
      {
        title: "Gestion des comptes",
        icon: <Icon name="UserCog" />,
        path: "/admin/gestion-comptes",
      },
      {
        title: "Historique",
        icon: <Icon name="History" />,
        path: "/admin/historique-connexion",
      },
    ],
  },
  {
    title: "Paramètres",
    icon: <Icon name="Settings" />,
    submenu: [
      {
        title: "Sous menu",
        
        path: "/admin/gestion-comptes",
      },
      {
        title: "Sous menu",
        // icon: <Icon name="Shield" />,
        path: "/admin/roles-permissions",
      },
    ],
  },
]

