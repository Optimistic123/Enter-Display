import React from "react";

function Button(props) {
  return (
    <button className="circle-button" src={props.img} alt="avatar_img">
      Delete
    </button>
  );
}

export default Button;
