import React from "react";

class IamAComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "600px",
          height: "300px",
          backgroundColor: "rgb(54,71,79)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px",
        }}
      >
        <h1>I am a Component</h1>
        {this.props.children}
      </div>
    );
  }
}
export default IamAComponent;
