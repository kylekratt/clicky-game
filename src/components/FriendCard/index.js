import React from "react";
import "./style.css";

const imgStyle = {
  backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/images/pokeball.jpg)'
}
function FriendCard(props) {
  return (
    <img onClick = {() => props.check(props.id)} alt="" className="border border-dark m-3 p-3 rounded" style={imgStyle} src={props.image} width="200px" height="200px"/>
  );
}

export default FriendCard;
