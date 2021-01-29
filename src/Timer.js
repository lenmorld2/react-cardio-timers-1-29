import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Number(this.props.initial)
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.value > 0) {
        this.setState((prevState) => ({
          value: prevState.value - 1
        }));
      }
    }, 1000);
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Timer;
