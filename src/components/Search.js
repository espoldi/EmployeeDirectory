import React from "react";


function Search(props) {
    return (
        <div className="input-field col s4 right">
            <input id="search" type="search" onChange={ props.change } />
            <label className="label-icon" ><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
        </div>
    );
}

export default Search;