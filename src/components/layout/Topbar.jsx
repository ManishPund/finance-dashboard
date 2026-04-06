import { Bell, IndianRupee, Menu, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Topbar = ({ setSidebarToggle }) => {
  return (
    <div className="flex h-17.5 w-full items-center justify-between border-b border-gray-200 bg-white px-6">
      {/* Logo */}
      <Link to="/" className="block md:hidden">
        <div className="logo">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-lg bg-indigo-600 p-2 font-bold text-white">
              <IndianRupee />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-black">FinTrack</h1>
              <p className="text-xs font-thin text-gray-600">
                Your Finance Dashboard
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div></div>
      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="text-lg text-gray-500 hover:text-gray-900">
          <Bell />
        </button>

        {/* Profile */}
        <div className="flex cursor-pointer items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
            MP
          </div>
          <span className="hidden text-sm font-medium text-gray-700 md:block">
            Manish Pund
          </span>
        </div>

        <div className="block md:hidden" onClick={() => setSidebarToggle(true)}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
