import { useSidebarStore } from "@/stores/sidebarStore";
import type { SidebarState } from "@/stores/sidebarStore";
import type { SidebarItemsInterface } from "@/interfaces/sidebarItemsInterface";

function SidebarItem({ name, icon, href }: SidebarItemsInterface) {
    const { isExpanded } = useSidebarStore() as SidebarState;

    return (
        <a className="flex flex-row items-center gap-2 p-2 pl-4 hover:bg-gray-800 rounded-md cursor-pointer text-white" href={href}>
            <div className="w-5 h-5 flex items-center justify-center">
                {typeof icon === 'function' ? icon({ size: 20 }) : icon}
            </div>
            <span 
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                    isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                }`}
            >
                {name}
            </span>
        </a>
    )
}

export default SidebarItem;