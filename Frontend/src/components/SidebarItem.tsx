import { Link } from "react-router-dom";
import { useSidebarStore } from "@/stores/sidebarStore";
import type { SidebarState } from "@/stores/sidebarStore";
import type { SidebarItemsInterface } from "@/interfaces/sidebarItemsInterface";

function SidebarItem({ name, icon, href }: SidebarItemsInterface) {
    const { isExpanded } = useSidebarStore() as SidebarState;

    return (
        <Link className="flex flex-row items-center gap-2 p-2 pl-4 hover:bg-gray-800 rounded-md cursor-pointer text-white" to={href}>
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                {typeof icon === 'function' ? icon({ size: 20 }) : icon}
            </div>
            <span 
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                    isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                }`}
            >
                {name}
            </span>
        </Link>
    )
}

export default SidebarItem;