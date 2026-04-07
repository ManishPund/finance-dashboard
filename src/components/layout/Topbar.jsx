import { IndianRupee, Menu, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleSidebar } from "../../redux/slices/uiSlice";
import { Link } from "react-router-dom";

const Topbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <div className="flex h-17.5 w-full items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
      {/* Logo */}
      <Link to="/" className="block md:hidden">
        <div className="logo">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-lg bg-indigo-600 p-2 font-bold text-white">
              <IndianRupee />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-black dark:text-white">
                FinTrack
              </h1>
              <p className="text-xs font-thin text-gray-600 dark:text-gray-400">
                Your Finance Dashboard
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div></div>
      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Dark Mode */}
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="text-gray-500 hover:text-gray-400 dark:text-gray-500"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>

        {/* Profile */}
        <div className="flex cursor-pointer items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
            MP
          </div>
          <span className="hidden text-sm font-medium text-gray-700 md:block dark:text-gray-100">
            Manish Pund
          </span>
        </div>

        <div
          className="block md:hidden dark:text-gray-100"
          onClick={() => dispatch(toggleSidebar())}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
