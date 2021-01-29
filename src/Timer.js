import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Number(this.props.initial)
    };
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Timer;
