import React from "react";


import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,  DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from "../../../../components/custom/LucideIcon"
import { Link } from "react-router-dom";

const HeaderPage: React.FC = () => {

    const handleDisconnectButtonClick = () => {
       console.log("test");
    };


    return (
        <>
            <div className="w-full bg-amber-300 h-14 flex justify-between items-center px-2">
                <div className=""></div>
                <div className="p-2 flex space-x-1">
                    <div className="notification-header me-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="  relative flex items-center border-0 focus-visible:border-0 rounded-full h-[3rem] px-1 cursor-pointer  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0" variant="outline">

                                    <div className="h-10 w-10 rounded-[3rem] border border-gray-300 bg-gray-200  hover:text-white relative flex items-center justify-center">
                                        <Icon size={28} strokeWidth={1.5} name="Bell" />

                                        <div className="absolute h-[1.2rem] w-[1.2rem] rounded-[1.5rem] bg-gray-300 top-1 -right-2 flex items-center justify-center">
                                            <span className="text-[11px] text-white font-extrabold">3</span>
                                        </div> 

                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side={"bottom"} align={"end"} className="w-[300px] bg-white p-0">
                                <div className="p-2">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Obcaecati in alias porro at fugit amet vitae sed doloribus itaque 
                                    perspiciatis animi soluta expedita, reiciendis nostrum atque voluptatem et hic! Illo.
                                </div>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="profile-header h-full flex items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="relative flex items-center border focus-visible:border border-gray-300 rounded-[3rem] h-[3rem] px-1 hover:bg-gray-300 hover:text-white cursor-pointer" variant="outline">
                                    <div>
                                        <Avatar>
                                            <AvatarImage src="/124599.jpeg" alt="@shadcn" />
                                            <AvatarFallback>
                                                CN
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className='flex flex-col px-2 text-left'>
                                        <span className="text-sm w-[9rem] truncate">Olivia Martin Olivia</span>
                                        <span className="text-xs font-normal w-[9rem] truncate">olivia.martin@email.com</span>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white me-2 border-gray-300">
                                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                                <DropdownMenuSeparator className='mx-1 my-1 h-px bg-gray-200' />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className='cursor-pointer rounded-[2px] p-0 my-1'>
                                        <Link className='flex items-center rounded-[2px] p-2 w-full text-[14px] hover:bg-gray-200' to="/admin/profile">
                                            <span><Icon size={24} strokeWidth={1.25} name="CircleUser"/></span>
                                            <span className="ps-2">Profile</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='cursor-pointer rounded-[2px] p-0 my-1'>
                                        <Link className='flex items-center rounded-[2px] p-2 w-full text-[14px] hover:bg-gray-200' to="/admin/parametres-compte">
                                            <span><Icon size={24} strokeWidth={1.25} name="UserRoundCog"/></span>
                                            <span className="ps-2">Paramètre compte</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className='mx-1 my-1 h-px bg-gray-200' />
                                <DropdownMenuItem className='cursor-pointer rounded-[2px] p-0 my-1'>
                                    <span className='flex items-center rounded-[2px] p-2 w-full text-[14px] hover:bg-gray-200' onClick={handleDisconnectButtonClick}>
                                        <span><Icon size={24} strokeWidth={1.25} name="LogOut"/></span>
                                        <span className="ps-2">Se déconnecter </span>
                                    </span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
             </div>
        </>
    );
}

export default HeaderPage;