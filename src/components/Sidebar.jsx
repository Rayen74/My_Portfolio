// Sidebar.jsx
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  FolderIcon,
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { CollapsedContext } from "../CollapsedContext";
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const { collapsed, setCollapsed } = useContext(CollapsedContext);

  const menuItems = [
    { id: "home", name: "Home", icon: HomeIcon, path: "/" },
    { id: "projects", name: "Projects", icon: FolderIcon, path: "/projects" },
    { id: "skills", name: "Skills", icon: CodeBracketIcon, path: "/skills" },
    { id: "contact", name: "Contact", icon: UserIcon, path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-900 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <h2
            className="absolute inset-0 hidden text-xl font-extrabold select-none text-cyan-400 filter blur-md animate-pulse md:block"
            title="My Portfolio"
          >
            My Portfolio
          </h2>
          <h2 className="relative text-xl font-extrabold select-none text-cyan-400 neon-glow animate-glitch">
            My Portfolio
          </h2>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {menuItems.map(({ id, name, icon: Icon, path }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md transition-colors duration-200 group ${
                  isActive
                    ? "bg-gray-800 text-cyan-400 shadow-md neon-glow animate-glitch"
                    : "text-gray-300 hover:bg-gray-800 hover:text-cyan-300 neon-glow"
                }`
              }
            >
              <Icon className="w-5 h-5 mr-2 group-hover:animate-pulse" aria-hidden="true" />
              <span className="text-base font-medium">{name}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={collapsed ? "Open menu" : "Close menu"}
          aria-expanded={!collapsed}
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md text-cyan-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 md:hidden"
        >
          {collapsed ? (
            <Bars3Icon className="w-6 h-6" />
          ) : (
            <XMarkIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-gray-900 md:hidden"
          >
            <div className="flex flex-col px-4 pb-4 space-y-2">
              {menuItems.map(({ id, name, icon: Icon, path }) => (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md transition-colors duration-200 group ${
                      isActive
                        ? "bg-gray-800 text-cyan-400 shadow-md neon-glow animate-glitch"
                        : "text-gray-300 hover:bg-gray-800 hover:text-cyan-300 neon-glow"
                    }`
                  }
                  onClick={() => setCollapsed(true)} // Close menu on click
                >
                  <Icon className="w-5 h-5 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                  <span className="text-base font-medium">{name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Sidebar;