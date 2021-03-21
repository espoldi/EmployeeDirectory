import React from "react";
import Menu from "./Menu";

function Search() {
    return (
        <form>
            <div className="input-field col s10">
                <input id="search" type="search"/>
                <label className="label-icon" ><i className="material-icons">search</i></label>
                <label className="label" >Employee Directory</label>
                <i className="material-icons">close</i>
            </div>
            <Menu />
        </form>
    );
}

export default Search;