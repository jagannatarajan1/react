import React from "react";
import Button from "../Button/Button";
import "./ErrorTab.css";
const ErrorTab = (props) => {
  return (
    <div className="modal" onClick={props.outtab}>
      <header className="header">{props.title}</header>
      <p className="content">{props.message}</p>
      <footer className="actions">
        <Button onClick={props.outtab}>okay</Button>
      </footer>
    </div>
  );
};
export default ErrorTab;
