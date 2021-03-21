import React from "react";

function InfoCard(props) {
    return (
        <div class="card col s12 m6 l4">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={props.data.picture.large} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{props.data.name.title} {props.data.name.first} {props.data.name.last}<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.data.name.title} {props.data.name.first} {props.data.name.last}<i class="material-icons right">close</i></span>
                <span>Age: {props.data.dob.age}<br/>
                Email: {props.data.email}<br/>
                Phone: {props.data.phone}<br/>
                Location: {props.data.location.country}</span>
            </div>
        </div>
    );
}

export default InfoCard;