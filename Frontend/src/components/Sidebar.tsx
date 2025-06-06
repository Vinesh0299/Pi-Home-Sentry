interface MenuItem {
    name: string;
    icon: string;
}

interface SidebarProps {
    isExpanded: boolean;
    onToggle: () => void;
    menuItems: MenuItem[];
}

function Sidebar({ isExpanded, onToggle, menuItems }: SidebarProps) {
    return (
        <div className={`fixed flex flex-col left-0 top-0 h-screen bg-gray-900 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
            <button
                onClick={onToggle}
                className={`p-4 h-16 hover:bg-gray-800 transition-colors`}
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isExpanded ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isExpanded ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isExpanded ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>
        </div>
    );
}

export default Sidebar;