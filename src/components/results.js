import React from "react";
import InfoCard from "./InfoCard";

function Results(props) {
    return (
        <div class="row">
            <div class="col s12 m4">
                {props.employees.map(person => (
                    <InfoCard data={ person } />
                ))}
            </div>
        </div>

    );
}

export default Results;