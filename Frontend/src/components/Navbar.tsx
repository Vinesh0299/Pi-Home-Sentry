import { useSidebarStore } from "@/stores/sidebarStore";
import Sidebar from "@/components/Sidebar";
import type { SidebarState } from "@/stores/sidebarStore";

function Navbar() {
  const { isExpanded } = useSidebarStore() as SidebarState;

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className={`flex flex-row justify-end fixed pl-4 top-0 w-full bg-gray-900 transition-all duration-300 ${isExpanded ? 'ml-64 pr-68' : 'ml-16 pr-20'}`}>
        <div className="h-16 flex items-center">
          <a className="text-white hover:bg-gray-800 hover:cursor-pointer p-2 px-4 rounded-md" target="_blank" href="https://github.com/Vinesh0299/Pi-Home-Sentry/tree/main">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;