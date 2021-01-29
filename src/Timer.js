import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Number(this.props.initial)
    };

    this.intervalRef = React.createRef();
  }

  componentDidMount() {
    this.intervalRef.current = setInterval(() => {
      if (this.state.value > 0) {
        this.setState((prevState) => ({
          value: prevState.value - 1
        }));
      }
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.intervalRef.current);
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.stopTimer}>STOP</button>
      </div>
    );
  }
}

export default Timer;
