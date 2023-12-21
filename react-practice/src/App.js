import React, { useState } from "react";
import AddUserForm from "./components/Form/AddUserForm";
import AddUserList from "./components/Form/UserList/AddUserList";
function App() {
  const [userList, setUserList] = useState([]);
  const userListHandler = (userName, userAge, userCollege) => {
    setUserList((previousUserList) => {
      return [
        ...previousUserList,
        { Name: userName, Age: userAge, CollegeName: userCollege },
      ];
    });
  };
  console.log(userList);
  return (
    <div>
      <AddUserForm ONAddList={userListHandler} />
      <AddUserList users={userList} />
    </div>
  );
}

export default App;
