import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#CCFF00", padding: "5px 0" }}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
export default Footer;
