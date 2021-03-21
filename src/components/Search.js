import React from "react";

function Search() {
    return (
            <div className="input-field col s8">
                <input id="search" type="search"/>
                <label className="label-icon" ><i className="material-icons">search</i></label>
                <label className="label" >Employee Directory</label>
                <i className="material-icons">close</i>
            </div>
    );
}

export default Search;