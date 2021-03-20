import React from "react";
import Input from './Input';
import SortMenu from './SortMenu';
import FilterMenu from './FilterMenu';

function SearchBar() {
    return (
        <ul className="collapsible">
            <li>
                <div className="collapsible-header"></div>
                <div className="collapsible-body">
                    <Input />
                    <SortMenu />
                    <FilterMenu />
                </div>
            </li>
        </ul>
    );
}

export default SearchBar;