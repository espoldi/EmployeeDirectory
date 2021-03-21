import React from 'react';

function Menu() {
    return (
        <>
            <ul id="sort" className="dropdown-content">
                <li><a>one</a></li>
                <li><a>two</a></li>
                <li><a>three</a></li>
            </ul>

            <ul id="nav-mobile" className="right">
                <li><a className="dropdown-trigger" data-target="sort">Sort by<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
        </>
    );
}

export default Menu;