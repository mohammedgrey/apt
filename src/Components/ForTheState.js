import React from "react";

class ForTheState extends React.Component {
  state = {
    r: 0,
    g: 0,
    b: 0,
    displayMe: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        displayMe: false,
      });
    }, 5000);
  }
  render() {
    return (
      <div className="for-the-state-class">
        <h1
          style={{
            color: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`,
          }}
        >
          Please change my color randomly
        </h1>
        <button
          className="for-any-button "
          onClick={() => {
            this.setState({
              r: Math.floor(Math.random() * 256),
              g: Math.floor(Math.random() * 256),
              b: Math.floor(Math.random() * 256),
            });
          }}
        >
          Okay, I am gonna change your color randomly
        </button>
        {this.state.displayMe && <div className="only-here-to-go in-state">I am gonna disappear after 5 seconds. And I am in a class based component.</div>}
      </div>
    );
  }
}
export default ForTheState;
