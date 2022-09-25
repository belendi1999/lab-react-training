import React from "react";


function IdCard(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.picture} alt="profileImage" />
            </div>
            <div className="card-info">
                <span><b>First name:</b> {props.firstName}</span>
                <span><b>Last name:</b> {props.lastName}</span>
                <span><b>Gender:</b> {props.gender}</span>
                <span><b>Height:</b> {props.height}</span>
                <span><b>Birthday:</b> {props.birth}</span>
            </div>

        </div>
    )
}

export default IdCard