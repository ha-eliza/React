import React from "react";

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "0"
    }
  }
  range = (event) => {
    this.setState({val: event.target.value})
  }
  render() {
    return (
      <div className="">
        <br />
        <input type="range" onInput={this.range} min="16" max="256" step="16"/>
        <p>{this.state.val}</p>
      </div>
    )
  }
}
export default Range;
