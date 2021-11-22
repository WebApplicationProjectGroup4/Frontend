import React, { useState } from "react";
import "./Login.css";

function Login(props) {
  //Const for users that saves the input
  const username = UserInput('');
  const password = UserInput('');
 
  // test to check the value
  const handleLogin = () => {
    console.log(username);
    console.log(password);
  }
 
  return (
    <div className="Login">
      <div className="Title">Login Page </div>
      <div className="Details">
        Username<br />
        <input type="text" {...username} />
      </div>
      <div className="Details">
        <div>Password</div>
        <input type="password" {...password} />
      </div>
      <input className="Button" type="button" value={'Login'} onClick={handleLogin}/><br />
    </div>
  );
}
 
const UserInput = initialValue => {
  //
  const [value, setValue] = useState(initialValue);
  // Sets the value of what was written
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    //returns the value
    value,
    onChange: handleChange,
  }
}
 
export default Login;