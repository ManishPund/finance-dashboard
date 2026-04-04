import {
  ArrowRightLeft,
  Banknote,
  ChartNoAxesCombined,
  IndianRupee,
  Landmark,
  Settings,
  Shield,
} from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-gray-400 p-4 flex flex-col border-r border-gray-800">
      {/* Logo */}
      <Link to="/">
        <div className="logo">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-indigo-600 p-2 rounded-lg text-white font-bold">
              <IndianRupee />
            </div>
            <div>
              <h1 className="text-white text-lg font-semibold">FinTrack</h1>
              <p className="text-xs font-thin text-gray-300">
                Your Finance Dashboard
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Menu */}
      <div className="menu font-medium">
        <NavLink to="/">
          {({ isActive }) => (
            <div
              className={`flex gap-2 px-4 py-4 mb-2 cursor-pointer rounded-2xl hover:text-white ${
                isActive ? "text-white bg-indigo-600" : ""
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
              className={`flex gap-2 px-4 py-4 mb-2 cursor-pointer rounded-2xl hover:text-white ${
                isActive ? "text-white bg-indigo-600" : ""
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
              className={`flex gap-2 px-4 py-4 mb-2 cursor-pointer rounded-2xl hover:text-white ${
                isActive ? "text-white bg-indigo-600" : ""
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
              className={`flex gap-2 px-4 py-4 mb-2 cursor-pointer rounded-2xl hover:text-white ${
                isActive ? "text-white bg-indigo-600" : ""
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
      <div className="mt-auto ">
        <div className="bg-gray-800 p-4 rounded-xl flex flex-col gap-3">
          <p className="text-sm text-gray-400 flex gap-2 items-center">
            <Shield color="#13D00C" /> Current Role
          </p>
          <h2 className="text-white font-semibold text-xl">Admin</h2>
          <p className="text-xs text-gray-400">
            You can add, edit and delete transactions
          </p>

          <button className="mt-3 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition flex gap-2 justify-center items-center cursor-pointer">
            <span>Switch Role</span> <ArrowRightLeft size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
