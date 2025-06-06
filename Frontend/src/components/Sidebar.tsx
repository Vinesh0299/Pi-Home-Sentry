import SidebarItem from "@/components/SidebarItem";
import { useSidebarStore } from "@/stores/sidebarStore";
import type { SidebarState } from "@/stores/sidebarStore";
import type { SidebarItemsInterface } from "@/interfaces/sidebarItemsInterface";

interface SidebarProps {
    items: SidebarItemsInterface[];
}

function Sidebar({ items }: SidebarProps) {
    const { isExpanded, toggleSidebar } = useSidebarStore() as SidebarState;

    return (
        <div className={`fixed flex flex-col left-0 top-0 h-screen bg-gray-900 transition-all duration-300 ${isExpanded ? 'w-48' : 'w-16'}`}>
            <button
                onClick={toggleSidebar}
                className={`p-4 h-16 hover:bg-gray-800 transition-colors`}
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isExpanded ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isExpanded ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isExpanded ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>
            <div className="flex flex-col">
                {items.map((item) => (
                    <SidebarItem name={item.name} icon={item.icon} href={item.href} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;