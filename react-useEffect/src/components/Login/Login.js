import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../input/input";
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return {
    value: "",
    isValid: false,
  };
};
const passwordReducer = (state, action) => {
  if (action.type === "INPUT_PASSWORD") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [enterCollegeName, setEnterCollegeName] = useState("");

  const [emailState, dispachedEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispachedPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    dispachedEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const { isValid: emailIsVaild } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    setFormIsValid(
      emailState.value.includes("@") &&
        passwordState.value.trim().length > 6 &&
        enterCollegeName.trim().length > 3
    );
  }, [emailState.value, passwordState.value, enterCollegeName]);

  const passwordChangeHandler = (event) => {
    dispachedPassword({ type: "INPUT_PASSWORD", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispachedEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispachedPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };
  const collegeNameHandler = (event) => {
    setEnterCollegeName(event.target.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="Email"
          id="email"
          isValid={emailIsVaild}
          type="text"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          label="College Name"
          id="college_name"
          type="text"
          isValid={passwordIsValid}
          value={enterCollegeName}
          onChange={collegeNameHandler}
        ></Input>
        <Input
          label="Password"
          id="password"
          isValid={passwordIsValid}
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
