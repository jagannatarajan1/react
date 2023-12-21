import React from "react";
import Button from "../Button/Button";
import "./ErrorTab.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.outtab}></div>;
};
const ModelOverlay = (props) => {
  return (
    <React.Fragment>
      <div className="modal">
        <header className="header">{props.title}</header>
        <p className="content">{props.message}</p>
        <footer className="actions">
          <Button onClick={props.outtab}>okay</Button>
        </footer>
      </div>
    </React.Fragment>
  );
};
const ErrorTab = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop outtab={props.outtab} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          outtab={props.outtab}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorTab;
