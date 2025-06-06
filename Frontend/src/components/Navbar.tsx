import { useState } from 'react';
import Sidebar from "@/components/Sidebar";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Cameras', icon: '📹' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Logs', icon: '📝' },
  ];

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar 
        isExpanded={isExpanded} 
        onToggle={() => setIsExpanded(!isExpanded)}
        menuItems={menuItems}
      />
      <div className={`flex flex-row justify-end fixed top-0 w-full bg-gray-900 transition-all duration-300 ${isExpanded ? 'ml-64 pr-68' : 'ml-16 pr-20'}`}>
        <div className="h-16 flex items-center">
          <span className="text-white">Pi Home Sentry</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;