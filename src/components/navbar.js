import React from "react";

import Search from "./Search";
import Menu from "./Menu";
import MenuContent from "./MenuContent";

function NavBar() {
    return (
        <div className="navbar-fixed row">
            <MenuContent />
            <nav>
                <div className="nav-wrapper deep-purple">
                        <Search />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;