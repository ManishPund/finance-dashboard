import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import { useState } from "react";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-slate-100">
        {/* Sidebar */}
        <div
          className={`
            fixed md:block top-0 left-0 h-full bg-gray-900 z-50
            transform transition-transform duration-300
            ${sidebarToggle ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 md:w-64 w-full
          `}
        >
          <Sidebar setSidebarToggle={setSidebarToggle} />
        </div>

        {/* Overlay */}
        {sidebarToggle && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarToggle(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:ml-64">
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
    </BrowserRouter>
  );
};

export default App;
