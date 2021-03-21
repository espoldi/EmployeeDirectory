import React from "react";

function FilterMenu() {
    return (
        <div className="input-field col s2">
            <select>
                <option value="">Filter</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>
    );
}

export default FilterMenu;