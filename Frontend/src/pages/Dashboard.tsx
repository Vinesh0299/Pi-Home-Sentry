import Navbar from "@/components/Navbar";
import { useSidebarStore } from "@/stores/sidebarStore";
import type { SidebarState } from "@/stores/sidebarStore";
import { navbarItems } from "@/constants/defaultNavbarItems";

function Dashboard() {
    const { isExpanded } = useSidebarStore() as SidebarState;

    return (
        <div className="min-h-screen w-screen bg-gray-400">
            <Navbar items={navbarItems} />
            <div className={`flex fixed top-0 left-0 transition-all duration-300 ${isExpanded ? 'ml-48' : 'ml-16'} mt-16`}>
                <span>Dashboard</span>
            </div>
        </div>
    )
}

export default Dashboard;