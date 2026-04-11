import "./Users.css";
import User from "./User";

function Users({ items, searchValue, onChangeValue, onClickInvite, invites, onClickSendInvites }) {
  return (
    <div className="">
      <div className="search">
        <input type="search" placeholder="Найти пользователя ..." value={searchValue} onChange={onChangeValue}/>
      </div>
      <ul className="users-list">
        {items
          .filter(e => {
            const full_name = (e.first_name + e.last_name).toLowerCase();
            return full_name.includes(searchValue.toLowerCase()) ||
            e.email.toLowerCase().includes(searchValue.toLowerCase())
          })
          .map((e) => (
            <User key={e.id} {...e} onClickInvite={onClickInvite} isInvited={invites.includes(e.id)}/>
          ))}
      </ul>
      { invites.length > 0 ? <button className="send-invite-btn" onClick={onClickSendInvites}>Отправить приглашение</button> : ''}
    </div>
  );
}

export default Users;
