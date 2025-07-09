import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Code, Sun, Moon, User, LogOut, MessageCircle, Wrench, FileText, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Code },
    { path: '/chat', label: 'Chat', icon: MessageCircle },
    { path: '/dev-tools', label: 'Dev Tools', icon: Wrench },
    { path: '/pages', label: 'Pages', icon: FileText },
    { path: '/discussion', label: 'Discussion', icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 shadow-sm backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
       <Link to="/" className="flex items-center space-x-2 group">
  <div className="bg-gradient-to-r from-rose-500 to-violet-500 p-2 rounded-xl transition-transform transform group-hover:rotate-12 group-hover:scale-110 shadow-md">
    <Code className="w-6 h-6 text-white" />
  </div>
  <span className="text-xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent transition-colors duration-300 group-hover:from-pink-400 group-hover:to-purple-500">
    Dire-Dev
  </span>
</Link>


          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`relative flex flex-col items-center px-2 py-1 text-sm font-medium transition-all duration-300 ${
                  isActive(path)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </div>
                
                {/* Animated underline */}
                <div 
                  className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                    isActive(path) 
                      ? 'w-full opacity-100' 
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-70'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {user && (
              <div className="flex items-center space-x-2">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">{user.displayName}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:shadow-lg"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;