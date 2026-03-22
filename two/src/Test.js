import React from "react";

class Test extends React.Component {
  render() {
    console.log("Render");

    return (
      <div className="">
        {
          console.log("Return")

        }
      </div>
    )
  }
}
export default Test;
