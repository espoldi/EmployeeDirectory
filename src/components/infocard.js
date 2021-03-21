import React from "react";

function InfoCard(props) {
    return (
        <div className="card col s12 m6 l4">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.data.picture.large} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.data.name.title} {props.data.name.last}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.data.name.first} {props.data.name.last}<i className="material-icons right">close</i></span>
                <span>{props.data.gender}, {props.data.dob.age}<br/>
                Email: {props.data.email}<br/>
                Phone: {props.data.phone}<br/>
                Location: {props.data.location.country}</span>
            </div>
        </div>
    );
}

export default InfoCard;