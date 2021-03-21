import React from "react";


function Search() {
    return (
        <div className="input-field col s4 right">
            <input id="search" type="search" />
            <label className="label-icon" ><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
        </div>
    );
}

export default Search;