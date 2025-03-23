import type React from "react"
import Icon from "../../components/LucideIcon"

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
    path: "/producteur/dashboard",

  },
  {
    title: "Modération des œuvres",
    icon: <Icon name="LayoutDashboard" />,
    path: "/producteur/moderation-oeuvres",
  },
  {
    title: "Suivi & Transactions",
    icon: <Icon name="Receipt" />,
    submenu: [
      {
        title: "Paiements",
        icon: <Icon name="CreditCard" />,
        path: "/producteur/paiements",
      },
    ],
  },
  {
    title: "Paramètres",
    icon: <Icon name="Settings" />,
    submenu: [
      {
        title: "Rôles & Permission",
        icon: <Icon name="Shield" />,
        path: "/producteur/roles-permissions",
      },
    ],
  },
]

