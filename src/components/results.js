import React from "react";
import InfoCard from "./InfoCard";

function Results(props) {
    return (
        <div className="container row">
                {props.employees.map((person, index) => (
                    <InfoCard data={ person } key={ index } />
                ))}
        </div>

    );
}

export default Results;