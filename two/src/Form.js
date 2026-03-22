import React from "react";

class Form extends React.Component {
  state = {
    firstName: '',
    email: ''
  };
  update = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const{firstName, email} = this.state
    return (
      <>
        <hr />
        <form>
          <br />
          <input name="firstName" value={firstName} onChange={this.update}/>
          <br />
          <input name="email" value={email} onChange={this.update}/>
        </form>
        <hr />
        <p>{firstName}</p>
        <p>{email}</p>
      </>
    );
  }
}
export default Form;
