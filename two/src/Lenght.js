import React from "react";

class Lenght extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lenght: 10
    }
  }
  add = () => {
    this.setState({
      lenght: this.state.lenght + 3
    });
  }
  reset = () => {
    this.setState({
      lenght: 10
    })
  }
  render() {
    return (
      <div className="">
        <br />
        <div className="">
          <button onClick={this.add}>Add Lenght</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <br />
        <input size={this.state.lenght} />
      </div>
    );
  }
}
export default Lenght;
