import React from 'react';

function MenuContent() {
    return (
        <>
            <ul id="sort" className="dropdown-content">
                <li><a>one</a></li>
                <li><a>two</a></li>
                <li><a>three</a></li>
            </ul>
            <ul id="filter" className="dropdown-content">
                <li><a>one</a></li>
                <li><a>two</a></li>
                <li><a>three</a></li>
            </ul>
        </>
    );
}

export default MenuContent;