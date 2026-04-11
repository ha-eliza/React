function User({ id, email, first_name, last_name, avatar, isInvited, onClickInvite }) {
  return (
    <li>
      <div className="">
        <img src={avatar} alt="" className="avatar" />
        <div className="text">
          <h3>
            {first_name} {last_name}
          </h3>
          <p>{email}</p>
        </div>
        <div className="button" onClick={() => onClickInvite(id)}><b >{isInvited ? "-" : "+"}</b></div>
      </div>
    </li>
  );
}
export default User;
