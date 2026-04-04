import { Bell, Search } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <div className="w-full h-17.5 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-75 ">
        <span className="text-gray-400 mr-2">
          <Search size={16} />
        </span>
        <input
          type="text"
          placeholder="Search transactions..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="text-gray-500 hover:text-gray-900 text-lg">
          <Bell />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full text-sm font-semibold">
            MP
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            Manish Pund
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
