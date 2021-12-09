import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import adminCheck from "../globals/AdminBoolean";
const axios = require('axios').default;

function Login(props) {
  //Const for users that saves the input
  const username = UserInput('');
  const password = UserInput('');
  let navigate = useNavigate();
  // test to check the value
  const handleLogin = () => {
    if (username.value, password.value !== '') //checking if the textboxes are empty or not
      login(username.value, password.value);
    else 
     console.log("The entries can not be empty")
  } 

  const handleCreateAccount  = () => {
    if (username.value, password.value !== '') //checking if the textboxes are empty or not
      createAccount(username.value, password.value);
    else 
     console.log("The entries can not be empty")
  } 

  function login(username, password) {

    axios.get('http://localhost:3001/login', {
      auth: {
        username: username,
        password: password
      }
    })
    .then(function (response) {

      adminCheck(response);

      if (!isNaN(response.data.length-2)) { // if 2nd last number is a number
        let idUser = ""; // build idUser string
        idUser += response.data.charAt(response.data.length-2); // add 2nd last num
        idUser += response.data.charAt(response.data.length-1); // add last num
        sessionStorage.setItem('idUser', parseInt(idUser)); // parse int idUser string to sessionStorage
      }

      console.log("Response data: ", response.data);
      console.log("Session storage user id: ", sessionStorage.getItem('idUser'));
      
      navigate('/');
      props.updateLoginState();
    })

    .catch(function (error) {
      console.log(error);
    });
  }

  function createAccount(username, password) {

    axios.post('http://localhost:3001/users', { //Create account 
      name: username,
      password: password,
      adminAccount: 0 
      })
  
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("An error has occurred while trying to create account.", error.response.data);
    })
  }
  
    return(
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

      <div className="Title">New user? Sign up here</div>
      <input className="Button" type="button" value={'Create Account'} onClick={handleCreateAccount}/><br />
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