import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-slate-100">
        
        {/* Sidebar */}
        <div className="w-64 shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Topbar />

          <div className="flex-1 overflow-y-auto p-4">
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