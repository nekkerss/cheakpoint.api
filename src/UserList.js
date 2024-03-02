
import User from "./user"

const UserList = ({data}) => {

  return (
    <div>
      <ul>
        { data.map(user=><User user={user} key={user.id}/>)}
      </ul>
    </div>
  )
    
}

export default UserList