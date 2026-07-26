import React from "react";
import { ThemeToggle } from "./ThemeToggle";

function Topbar() {
    return (
        <header className="topbar">
            {/* Keep your existing topbar content here */}
            <div className="topbar-left">
                {/* Logo, title, or search bar */}
            </div>

            <div className="topbar-right">
                {/* Other header icons/actions */}
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Topbar; 