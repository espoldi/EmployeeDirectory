import React from "react";

function FilterMenu() {
    return (
        <div class="input-field col s2">
            <select>
                <option value="" disabled selected>Filter</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>
    );
}

export default FilterMenu;