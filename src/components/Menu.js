import React from 'react';

function Menu() {
    return (
        <ul id="nav-mobile" className="right">
            <li><a className="dropdown-trigger" data-target="sort">Sort by<i className="material-icons right">arrow_drop_down</i></a></li>
            <li><a className="dropdown-trigger" data-target="filter">Filter<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
    );
}

export default Menu;