function UserData (){
  let user = {
    first:'Peter',
    last:'Rubino',
    age:'26',
 };
 return (
  <div>
    <ul>
      User Data 
        <li>First: {user.first}</li>
        <li>Last: {user.last}</li>
        <li>Age: {user.age}</li>
    </ul>

  </div>
 )
}
export default UserData;