import React, { useState } from "react";
import "./Login.css";
const axios = require('axios').default;

function Login(props) {
  //Const for users that saves the input
  const username = UserInput('');
  const password = UserInput('');
 
  // test to check the value
  const handleLogin = () => {
    login(username.value, password.value);
  }

  function login(username, password) {

  /*axios.post('/orderhistory', { //Order history post ready, button missing
      price: 5,
      idUser: 1,
      idRestaurant: 1
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("An error has occurred while trying to post order history.", error);
    });*/

    var adminAccount;
    var idUser;

    var un = username;
    var pw = password;

    axios.get('http://localhost:3001/login', {
      auth: {
        username: un,
        password: pw
      }
    })
    .then(function (response) {
      const admin = (response.data.includes("admin"));
      if (admin === true)
        adminAccount = true;

      else
        adminAccount = false;

      idUser = response.data.charAt(response.data.length-1);

      console.log(response.data);
      console.log("Admin account: ", adminAccount);
      console.log("User id: ", idUser);
    })

    .catch(function (error) {
      console.log(error);
    });
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