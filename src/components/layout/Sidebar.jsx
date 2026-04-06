import {
  ArrowRightLeft,
  Banknote,
  ChartNoAxesCombined,
  IndianRupee,
  Landmark,
  Settings,
  Shield,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ setSidebarToggle }) => {
  return (
    <div className="flex h-screen flex-col overflow-y-auto border-r border-gray-800 bg-gray-900 p-4 text-gray-400">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="logo">
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="rounded-lg bg-indigo-600 p-2 font-bold text-white">
                <IndianRupee />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">FinTrack</h1>
                <p className="text-xs font-thin text-gray-300">
                  Your Finance Dashboard
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div
          className="mb-8 block md:hidden"
          onClick={() => setSidebarToggle((prev) => !prev)}
        >
          <X />
        </div>
      </div>

      {/* Menu */}
      <div className="menu font-medium">
        <NavLink to="/">
          {({ isActive }) => (
            <div
              className={`mb-2 flex cursor-pointer gap-2 rounded-2xl px-4 py-4 hover:text-white ${
                isActive ? "bg-indigo-600 text-white" : ""
              }`}
            >
              <span>
                <Landmark />
              </span>
              <span>Dashboard</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/transaction">
          {({ isActive }) => (
            <div
              className={`mb-2 flex cursor-pointer gap-2 rounded-2xl px-4 py-4 hover:text-white ${
                isActive ? "bg-indigo-600 text-white" : ""
              }`}
            >
              <span>
                <Banknote />
              </span>
              <span>Transaction</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/insights">
          {({ isActive }) => (
            <div
              className={`mb-2 flex cursor-pointer gap-2 rounded-2xl px-4 py-4 hover:text-white ${
                isActive ? "bg-indigo-600 text-white" : ""
              }`}
            >
              <span>
                <ChartNoAxesCombined />
              </span>
              <span>Insights</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/settings">
          {({ isActive }) => (
            <div
              className={`mb-2 flex cursor-pointer gap-2 rounded-2xl px-4 py-4 hover:text-white ${
                isActive ? "bg-indigo-600 text-white" : ""
              }`}
            >
              <span>
                <Settings />
              </span>
              <span>Settings</span>
            </div>
          )}
        </NavLink>
      </div>

      {/* Role Switch */}
      <div className="mt-auto">
        <div className="flex flex-col gap-3 rounded-xl bg-gray-800 p-4">
          <p className="flex items-center gap-2 text-sm text-gray-400">
            <Shield color="#13D00C" /> Current Role
          </p>
          <h2 className="text-xl font-semibold text-white">Admin</h2>
          <p className="text-xs text-gray-400">
            You can add, edit and delete transactions
          </p>

          <button className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-600 py-2 text-white transition hover:bg-indigo-500">
            <span>Switch Role</span> <ArrowRightLeft size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
