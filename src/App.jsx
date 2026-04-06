import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const darkMode = useSelector((state) => state.ui.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""} h-full`}>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 z-50 h-full transform bg-gray-900 transition-transform duration-300 md:block ${sidebarToggle ? "translate-x-0" : "-translate-x-full"} w-full md:w-64 md:translate-x-0`}
          >
            <Sidebar setSidebarToggle={setSidebarToggle} />
          </div>

          {/* Overlay */}
          {sidebarToggle && (
            <div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setSidebarToggle(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex flex-1 flex-col md:ml-64">
            <Topbar setSidebarToggle={setSidebarToggle} />

            <div className="flex-1 overflow-y-auto p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
