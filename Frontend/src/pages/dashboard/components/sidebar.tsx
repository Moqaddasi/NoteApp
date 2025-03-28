import { AnimatePresence, motion } from "framer-motion";
import { FileText, Folder, Home, LogOut, Menu, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const sidebarItems = [
  { name: "home", icon: Home, color: "#10B981", href: "/dashboard/home" },
  { name: "notes", icon: FileText, color: "#3B82F6", href: "/dashboard/notes" },
  {
    name: "favorites",
    icon: Star,
    color: "#F59E0B",
    href: "/dashboard/favorites",
  },
  {
    name: "category",
    icon: Folder,
    color: "#8B5CF6",
    href: "/dashboard/category",
  },
  {
    name: "Log out",
    icon: LogOut,
    color: "#6B7280",
    href: "/login",
  },
];

function Sidebar() {
  const [isShowSidebar, isSetShowSidebar] = useState(false);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isShowSidebar ? "w-64" : "w-20"
      }`}
      animate={{ width: isShowSidebar ? 256 : 100 }}
    >
      <div className=" bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 items-center justify-start h-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => isSetShowSidebar(!isShowSidebar)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors  max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav>
          {sidebarItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-start p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors m-4">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isShowSidebar && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
export default Sidebar;
