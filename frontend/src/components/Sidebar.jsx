import { NavLink } from "react-router-dom";
import "../styles/components/sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="logo">AuraGen</h2>

            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Dashboard
                </NavLink>

                <NavLink
                    to="/financial-form"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Financial Form
                </NavLink>

                <NavLink
                    to="/analytics"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Analytics
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Settings
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;