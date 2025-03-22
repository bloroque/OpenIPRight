"use client"
import { useLocation, Link } from "react-router-dom"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { sidebarData } from "./sidebarData"

interface SidebarPageProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const SidebarPage: React.FC<SidebarPageProps> = ({
    collapsed,
    setCollapsed
}) => {

    const location = useLocation()
    const { pathname } = location
    const pathnameWithoutParams = pathname.split("?")[0]

    return (
            <div
                className={cn(
                    "bg-card h-full transition-all duration-300 border-r relative overflow-hidden overflow-y-auto",
                    collapsed ? "w-[70px]" : "w-[250px]",
                )}
            >
                {/* En-tête de la sidebar */}
                <div className="p-4 font-semibold text-lg border-b h-16 flex items-center">
                    {!collapsed && "En-tête de la sidebar"}
                </div>

                {/* Bouton pour réduire/étendre la sidebar */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -right-3 top-4.5 bg-card border shadow-sm z-10 cursor-pointer"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </Button>

                {/* Contenu du menu */}
                <div className="py-2 flex flex-col gap-1">
                    <div className="h-8"></div>

                    {sidebarData.map((item) => {
                        const isActive = item.submenu
                            ? item.submenu.some((subItem) => pathnameWithoutParams === subItem.path)
                            : pathnameWithoutParams === item.path

                        // Si l'élément a un sous-menu
                        if (item.submenu && !collapsed) {
                            return (
                            <Collapsible key={item.title} className="w-full">
                                <CollapsibleTrigger asChild>
                                    <div
                                        className={cn(
                                        "min-h-10 flex items-center justify-between rounded-md px-2 mx-2 text-sm leading-6 font-medium hover:text-primary hover:bg-muted/50 transition-colors cursor-pointer",
                                        isActive && "bg-primary/10 text-primary font-bold",
                                        )}
                                    >
                                        <div className="flex items-center">
                                            <span className="menu-icon text-inherit">{item.icon}</span>
                                            <span className="menu-title ps-2">{item.title}</span>
                                        </div>
                                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 ui-open:rotate-180" />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="pl-8 pr-2 py-1 space-y-1">
                                        {item.submenu.map((subItem) => {
                                            const isSubActive = pathnameWithoutParams === subItem.path
                                            return (
                                                <Link
                                                    key={subItem.title}
                                                    to={subItem.path}
                                                    className={cn(
                                                        "min-h-8 flex items-center rounded-md px-2 text-sm leading-6 hover:text-primary hover:bg-muted/50 transition-colors",
                                                        isSubActive && "bg-primary/10 text-primary font-bold",
                                                    )}
                                                >
                                                    <span className="menu-icon text-inherit">{subItem.icon}</span>
                                                    <span className="menu-title ps-2">{subItem.title}</span>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            )
                        }

                        // Si l'élément n'a pas de sous-menu ou si la sidebar est réduite
                        return (
                            <Link
                                key={item.title}
                                to={item.path || "#"}
                                className={cn(
                                    "min-h-10 flex items-center rounded-md px-2 mx-2 text-sm leading-6 font-medium hover:text-primary hover:bg-muted/50 transition-colors",
                                    isActive && "bg-primary/10 text-primary font-bold",
                                )}
                                title={collapsed ? item.title : undefined}
                            >
                                {item.icon && <span className="menu-icon">{item.icon}</span>}
                                {/* <span className="menu-icon text-inherit">{item.icon}</span> */}
                                {!collapsed && <span className="menu-title ps-2">{item.title}</span>}
                            </Link>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default SidebarPage;

