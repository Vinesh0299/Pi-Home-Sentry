import { useSidebarStore } from "@/stores/sidebarStore";
import type { SidebarState } from "@/stores/sidebarStore";

function Footer() {
    const { isExpanded } = useSidebarStore() as SidebarState;

    return (
        <div className={`flex bottom-0 left-0 w-full h-16 bg-gray-900 transition-all duration-300 ${isExpanded ? 'ml-48' : 'ml-16'}`}>
            <span>Footer</span>
        </div>
    )
}

export default Footer;