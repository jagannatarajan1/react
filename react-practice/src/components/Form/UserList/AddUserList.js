import React from "react";
import "./AddUserList.css";
const AddUserList = (props) => {
  return (
    <div className="users">
      <ul>
        {props.users.map((user) => (
          <li>
            {user.Name} ({user.Age}years old)
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AddUserList;
