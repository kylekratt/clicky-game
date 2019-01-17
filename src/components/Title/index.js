import React from "react";
import "./style.css";

function Title(props) {
  return (
    <nav className="navbar navbar-expand-lg text-white bg-dark d-flex justify-content-between align-items-center">
        <span className="display-4">Clicky Game</span>
        <span className="display-4">{props.message ? props.message :' Click on an image to start'}</span>
        <span className="display-4">Score:{props.score} | Top Score:{props.topScore}</span>
    </nav>
  );
}

export default Title;
