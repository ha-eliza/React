import React from "react";

class Range extends React.Component {
  state = {
    val: 14
  }

  range = (event) => {
    this.setState({
      val: event.target.value
    })
  }

  render() {
    return (
      <div className="">
        <input type="range" onInput={this.range} min="14" max="256" step="14"/>
        <p>{this.state.val}px * {this.state.val}px</p>
        <div>
          <object width={this.state.val} height={this.state.val} style={{ backgroundColor: '#c239b3' }}>
          </object>
        </div>
      </div>
    )
  }
}

export default Range;
