import React from "react";

import Search from "./Search";
import Menu from "./Menu";

function NavBar(props) {
    return (
        <div className="navbar-fixed row">
            <nav>
                <div className="nav-wrapper grey darken-4">
                <a class="brand-logo left">Directory</a>
                    <form>
                        <Menu sort={ props.sort } />
                        <Search change={ props.change }/>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;