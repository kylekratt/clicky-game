import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <img onClick = {() => props.check(props.id)} alt="" className="border border-dark m-3 p-3 rounded" src={process.env.PUBLIC_URL + props.image} width="200px" height="200px"/>
  );
}

export default FriendCard;
