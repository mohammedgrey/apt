import React from "react";
import { Link } from "react-router-dom";
import "./Explanation.css";
import IamAComponent from "./IamAComponent";
import IamAnotherComponent from "./IamAnotherComponent";
import ForTheState from "./ForTheState";
import ForTheHooks from "./ForTheHooks";

class Explanation extends React.Component {
  render() {
    return (
      <div className="explanation-div">
        <Link to="/">
          <i className="fas fa-arrow-circle-left"></i>BACK TO HOME
        </Link>

        <h1>
          <i className="far fa-hand-point-down"></i> Components
        </h1>
        <IamAComponent>
          <IamAnotherComponent />
        </IamAComponent>

        <h1>
          <i className="far fa-hand-point-down"></i> Managing The State
        </h1>

        <ForTheState />

        <h1>
          <i className="far fa-hand-point-down"></i> Using Hooks
        </h1>
        <ForTheHooks />
      </div>
    );
  }
}

export default Explanation;
