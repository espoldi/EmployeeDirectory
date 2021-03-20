import React from "react";

import Search from "./Search";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";

function NavBar() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper row deep-purple">
                    <form>
                        <Search />
                        <SortMenu />
                        <FilterMenu />
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;