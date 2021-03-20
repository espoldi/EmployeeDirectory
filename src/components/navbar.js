import React from "react";
import Search from "./Search";

function NavBar() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <Search />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;