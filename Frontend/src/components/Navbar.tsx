import { useSidebarStore } from "@/stores/sidebarStore";
import Sidebar from "@/components/Sidebar";
import type { SidebarState } from "@/stores/sidebarStore";

function Navbar() {
  const { isExpanded } = useSidebarStore() as SidebarState;

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className={`flex flex-row justify-start fixed pl-4 top-0 w-full bg-gray-900 transition-all duration-300 ${isExpanded ? 'ml-64 pr-68' : 'ml-16 pr-20'}`}>
        <div className="h-16 flex items-center">
          <span className="text-white">Pi Home Sentry</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;