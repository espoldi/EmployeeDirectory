import React from 'react';

function Menu(props) {
    return (
        <>
            <ul id="sort" className="dropdown-content">
                <li><a onClick={ props.sort }>A to Z</a></li>
            </ul>

            <ul id="nav-mobile" className="right">
                <li><a className="dropdown-trigger" data-target="sort">Sort by<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
        </>
    );
}

export default Menu;