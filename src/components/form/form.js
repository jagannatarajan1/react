import React from "react";
const Form = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};
export default Form;
