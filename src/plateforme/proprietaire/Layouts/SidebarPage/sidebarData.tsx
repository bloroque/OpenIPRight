import type React from "react"
import Icon from "../../components/LucideIcon"
import { BiHomeAlt2 } from "react-icons/bi";
import { PiCreditCardDuotone } from "react-icons/pi";

export interface SidebarItem {
  title: string
  icon?: React.ReactNode
  path?: string
  submenu?: SidebarItem[]
}

export const sidebarData: SidebarItem[] = [
  {
    title: "Accueil",
    icon: <BiHomeAlt2 size={24}/>,
    path: "/proprio/dashboard",
  },
  {
    title: "Catalogue des Œuvres",
    icon: <Icon name="Store" />,
    path: "/proprio/marketplace",
  },
  {
    title: "Bibliothèque",
    icon: <Icon name="LibraryBig" />,
    path: "/proprio/library",
  },
  {
    title: "Actualités",
    icon: <Icon name="BookOpen" />,
    path: "/proprio/news",
  },
  {
    title: "Transaction",
    icon: <PiCreditCardDuotone size={26}/>,
    path: "/proprio/transaction",
  },
  {
    title: "Paramètres",
    icon: <Icon name="Settings" />,
    path: "/proprio/setting",
  },
]

