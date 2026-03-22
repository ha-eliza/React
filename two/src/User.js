import React from "react";

class User extends React.Component {
  componentWillUnmount() {
    alert('Пользователь удален')
  }
  render() {
    return (
      <div className="">
        <ul>
          <li>Name: Kim A </li>
          <li>email: qwer@mail.com</li>
          <li>tel: +7 938 693 89 62</li>
        </ul>
      </div>
    )
  }
}
export default User;
