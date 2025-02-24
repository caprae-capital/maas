import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Hexagon, Users, Settings, LogOut, ClipboardList, Moon, Sun, Wrench } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/contexts/ThemeContext';

interface SidebarProps {
  onLogout: () => void;
}

export function Sidebar({ onLogout }: SidebarProps) {
  const { userProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname.includes(path);

  const getNavItems = () => {
    const commonItems = [
      { icon: <ClipboardList className="h-5 w-5" />, label: "Deal Room", path: "deals" },
      { icon: <Wrench className="h-5 w-5" />, label: "Tools", path: "tools" },
      { icon: <Settings className="h-5 w-5" />, label: "Settings", path: "settings" },
      { icon: <LogOut className="h-5 w-5" />, label: "Logout", path: "logout", onClick: onLogout }
    ];

    // Only show Matches tab for sellers
    if (userProfile?.userType === 'seller') {
      return [
        { icon: <Users className="h-5 w-5" />, label: "Matches", path: "matches" },
        ...commonItems
      ];
    }

    return commonItems;
  };

  const navItems = getNavItems();

  return (
    <div className="w-64 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-r border-slate-200/60 dark:border-slate-700/60 flex-shrink-0 sticky top-0 h-screen">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60">
          <Link to="/" className="flex items-center">
            <Hexagon className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">MaaS</span>
          </Link>
        </div>

        <div className="p-4 border-b border-slate-200/60 dark:border-slate-700/60">
          <button 
            onClick={() => navigate('/app/profile')} 
            className="flex items-center space-x-3 w-full hover:bg-slate-50 dark:hover:bg-slate-700/50 p-2 rounded-lg transition-colors"
          >
            <div className="relative">
              <img
                src={userProfile?.avatar}
                alt={userProfile?.name}
                className="h-10 w-10 rounded-full ring-2 ring-purple-100 dark:ring-purple-900"
              />
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-white dark:ring-slate-800"></div>
            </div>
            <div className="text-left">
              <div className="text-slate-900 dark:text-white font-medium">{userProfile?.name}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 capitalize">{userProfile?.userType}</div>
            </div>
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 group"
                  >
                    <span className="text-slate-400 dark:text-slate-500 group-hover:text-red-500 dark:group-hover:text-red-400">{item.icon}</span>
                    <span className="group-hover:text-red-600 dark:group-hover:text-red-400">{item.label}</span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 shadow-sm ring-1 ring-purple-100 dark:ring-purple-800/50 font-medium'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-purple-50/50 dark:hover:bg-purple-900/20'
                    }`}
                  >
                    <span className={isActive(item.path) ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400 dark:text-slate-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="p-4 mt-auto border-t border-slate-200/60 dark:border-slate-700/60">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-all duration-200"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-5 w-5" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-5 w-5" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}