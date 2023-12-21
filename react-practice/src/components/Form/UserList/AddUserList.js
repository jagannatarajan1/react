import React from "react";
import "./AddUserList.css";
const AddUserList = (props) => {
  console.log(props);
  return (
    <div className="users">
      <ul>
        {props.users.map((user) => (
          <li>
            {user.Name} ({user.Age}years old)(studied in {user.CollegeName}{" "}
            College)
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AddUserList;
