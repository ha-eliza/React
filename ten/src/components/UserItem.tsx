import { User } from "../types/types"
function UserItem({user}: {user: User}) {
  return <div className="user">
    <p><b>User {user.id}:</b><span> {user.name}</span></p>
    <div className="">
      <p><i>Address:</i> {user.address.city}, {user.address.street}, {user.address.suite}</p>
    </div>
  </div>
}
export default UserItem
