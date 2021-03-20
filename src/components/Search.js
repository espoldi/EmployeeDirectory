import React from "react";

function Search() {
    return (
            <div className="input-field col s8">
                <input id="search" type="search"/>
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
            </div>
    );
}

export default Search;