import React, { useState, useRef } from "react";
import "./AddUserForm.css";
import Button from "./Button/Button";
import ErrorTab from "./Ui/ErrorTab";
const AddUserForm = (props) => {
  const CollegeName = useRef();
  const [enteredname, setenteredname] = useState("");
  const [enteredage, setenteredage] = useState("");
  const [Error, SetError] = useState();
  const UserNameChangeHandler = (event) => {
    setenteredname(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setenteredage(event.target.value);
  };
  const ErrorOut = () => {
    SetError(null);
  };
  const FormSubmit = (event) => {
    event.preventDefault();
    const Refcollegename = CollegeName.current.value;
    console.log(Refcollegename);
    if (enteredname.trim().length === 0 || enteredage.trim().length === 0) {
      SetError({
        title: "AN error occur",
        message: "Please Enter The Details",
      });
      return;
    }
    if (enteredage < 1) {
      SetError({ title: "Enter the correct age", message: "ENter the Age >0" });
      return;
    }
    props.ONAddList(enteredname, enteredage, Refcollegename);
    setenteredage("");
    setenteredname("");
  };
  return (
    <div>
      {Error && (
        <ErrorTab
          outtab={ErrorOut}
          title={Error.title}
          message={Error.message}
        ></ErrorTab>
      )}

      <form onSubmit={FormSubmit}>
        <div className="form-control">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            value={enteredname}
            onChange={UserNameChangeHandler}
          />
          <label htmlFor="Age">Age</label>
          <input
            id="Age"
            type="number"
            value={enteredage}
            onChange={AgeChangeHandler}
          />
          <label htmlFor="College_name">College Name</label>
          <input type="text" id="College_name" ref={CollegeName} />
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
