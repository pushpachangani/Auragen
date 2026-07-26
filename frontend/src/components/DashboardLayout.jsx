import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ThemeToggle } from "./ThemeToggle";
import "../styles/components/layout.css";

function DashboardLayout({ children }) {
    return (
        <div className="layout">
            <Sidebar />

            <div className="main-content">
                <Topbar />

                <div className="page-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout; 