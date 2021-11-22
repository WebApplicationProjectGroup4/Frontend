import React, { useState } from "react";
import "./Login.css";
const axios = require('axios').default;

function Login(props) {
  //Const for users that saves the input
  const username = UserInput('');
  const password = UserInput('');
 
  // test to check the value
  const handleLogin = () => {
    console.log(username, " handleLogin username");
    console.log(password, " handleLogin password");
    login(username.value, password.value);
  }

  function login(username, password) {

    var un = username;
    var pw = password;

    console.log(un, pw, " handleLogin -> login event");

    // get
    axios.get('/users')
    .then(function (response) {
      // handle success
      pwCheck(response, un, pw);
    })

    .catch(function (error) {
      // handle error
      console.log(error);
    })

    .then(function (response) {
      // always executed
    });
  }

  function pwCheck(response, un, pw) {

    var localUser = un;
    var localPW = pw;
    var res = response; // easier to read
  
    console.log("axios GET success -> pwCheck function");
  
    console.log(res.data); // debug
  
    // res is returned from db as an object array
    // res contains a cfg file, data(db entries), headers & requests
    // res.data = array of objects/entries returned from db
    // res.data[0] = first returned entry
    // in this case [0] is the first user
  
    for (var i = 0; i < res.data.length; i++) {
      // while i < returned users from db -> loop
  
      // if the array index i is currently in, contains the same username & password
      // as our local variables, login is successful. there's an ugly debug of what has happened
  
      if (res.data[i].Name === localUser && res.data[i].Password === localPW ) {
        console.log("local user/pw ", localUser, ";", localPW, " matches db user/pw ", res.data[i].Name, ";",
        res.data[i].Password, " on index response[", i, "]; and database idUser index", res.data[i].idUser);
  
        if (res.data[i].AdminAccount === 1)
          console.log("admin account!");
  
        console.log("login successful");
      }
    }
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