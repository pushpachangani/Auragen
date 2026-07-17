import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import FinancialForm from "./pages/FinancialForm";
import Analytics from "./pages/analytics";
import Settings from "./pages/settings";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/financial-form" element={<FinancialForm />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;