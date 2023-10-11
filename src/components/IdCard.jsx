import React from "react";

export default function IdCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.picture} alt="" />
        <div className="info">
          <p>
            <span>First Name: </span>
            {props.firstName}
          </p>
          <p>
            <span>Last Name: </span>
            {props.lastName}
          </p>
          <p>
            <span>Gender: </span>
            {props.gender}
          </p>
          <p>
            <span>Height: </span>
            {[
              props.height.toString().slice(0, 1),
              ".",
              props.height.toString().slice(1),
            ].join("") + "m"}
          </p>
          <p>
            <span>Birth: </span>
            {props.birth.toISOString().split("T")[0]}
          </p>
        </div>
      </div>
    </>
  );
}
