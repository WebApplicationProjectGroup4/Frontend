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
     alert("The entries can not be empty");
  } 

  const handleCreateAccount  = () => {
    if (username.value, password.value !== '') //checking if the textboxes are empty or not
      createAccount(username.value, password.value, adminValue);
    else 
     alert("The entries can not be empty");
  } 

  function login(username, password) {

    axios.get('https://awagroup4project.herokuapp.com/login', {
      auth: {
        username: username,
        password: password
      }
    })
    .then(function (response) {

      adminCheck(response);

      const searchChar = '/'; // search the char /
      const userIndex = response.data.indexOf(searchChar); // find index of T

      let str = response.data.slice(userIndex+1);
      sessionStorage.setItem("idUser", parseInt(str));

      console.log("Response data: ", response.data);
      console.log("Session storage user id: ", sessionStorage.getItem('idUser'));
      
      navigate('/');
      props.updateLoginState();
    })

    .catch(function (error) {
      console.log(error);
    });
  }

  const [adminValue, setAdminValue] = React.useState('0')
  const [checked, setChecked] = React.useState(false);
  const handleCheckbox = () => {
    setChecked(!checked);
    if (checked === false) {
      setAdminValue(1);
    } else {
      setAdminValue(0);
    }
  }
  
    
  function createAccount(username, password, adminValue) {

    axios.post('https://awagroup4project.herokuapp.com/users', { //Create account 
      name: username,
      password: password,
      adminAccount: adminValue
      })
  
    .then(function (response) {
      console.log(response.data);
      const nameTaken = (response.data === "this username is taken!");
      if (nameTaken == true) 
        alert("This username is taken!");
      else
        alert("Account created successfully");
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
      <div>Create admin account?<input type="checkbox" onChange={handleCheckbox}></input></div>
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