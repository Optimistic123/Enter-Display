import React from "react";
import Button from "./Button";
import Detail from "./Detail";
import "./styles.css";

function Card(props) {
  function DeleteCard(props) {
    
  }

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.username}</h2>
        <Button onClick={DeleteCard} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
        <Detail detailInfo={props.cv} />
      </div>
    </div>
  );
}

export default Card;
