import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initial
    };
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}

export default Timer;
