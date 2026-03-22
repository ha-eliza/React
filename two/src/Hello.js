import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
    };
  }
  changeText = () => {
    this.setState((state) => ({
      text: !state.text
    }));
  };
  // resetText = () => {
  //   this.setState({
  //     text: "Hello"
  //   })
  // }
  render() {
    return (
      <div className="">
        <button onClick={this.changeText}>Заменить</button>
        {/* <button onClick={this.resetText}>Сбросить</button> */}
        <p>{this.state.text ? "Привет" : "Hello"}</p>
      </div>
    );
  }
}

export default Hello;
