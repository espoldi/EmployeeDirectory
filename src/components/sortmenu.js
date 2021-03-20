import React from "react";

function SortMenu() {
    return (
        <div class="input-field col s2">
            <select>
                <option value="" disabled selected>Sort By</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>
    );
}

export default SortMenu;