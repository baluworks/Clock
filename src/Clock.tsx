import React from "react";

interface State {
  time: Date;
}
export class Clock extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }
  tick = () => {
    this.setState({ time: new Date() });
  };

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}
