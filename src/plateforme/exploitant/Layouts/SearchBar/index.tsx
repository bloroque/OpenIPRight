import { Button } from "@/components/ui/button";
import Icon from "../../../../components/custom/LucideIcon"
import React from "react";

const SearchBar: React.FC = () => {

    return (
        <div className="relative">

            <Button
                className="  relative flex items-center border-0 focus-visible:border-0 rounded-full h-[2.5rem] p-0 cursor-pointer  focus-visible:outline-none focus-visible:ring-0 bg-gray-300 text-accent-foreground hover:text-white"
            >
                <Icon size={30} strokeWidth={1.5} name="Search" />
                <span>Recherche</span>

            </Button>
        </div>
    );

}

export default SearchBar;