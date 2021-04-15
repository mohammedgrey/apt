import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-div">
        <div className="center-div">
          <h1>APT Presentation</h1>
          <button
            className="explanation-btn"
            onClick={() => {
              this.props.history.push("/explanation");
            }}
          >
            <i className="fas fa-pen-square"></i> GO TO EXPLANATION
          </button>
        </div>
        <img src={"https://cdn.discordapp.com/attachments/692114170815971370/832268591226421258/logo.png"} />
      </div>
    );
  }
}

export default Home;
