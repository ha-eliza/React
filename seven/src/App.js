import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/users/Users";
import Success from "./components/success/Success";

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://www.myjsons.com/v/0f284975")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      });
  }, []);
  const onChangeValue = (event) => setSearchValue(event.target.value);
  const onClickInvite = (id) =>
    invites.includes(id)
      ? setInvites((prev) => prev.filter((e) => e !== id))
      : setInvites((prev) => [...prev, id]);
  const onClickSendInvites = () => {
    setSuccess(true);
  };
  return (
    <div className="main">
      {success ? (
        <Success count={invites.length}/>
      ) : (
        <Users
          items={users}
          searchValue={searchValue}
          onChangeValue={onChangeValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
