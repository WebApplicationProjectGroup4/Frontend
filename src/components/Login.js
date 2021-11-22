import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import "./Login.css";

const axios = require('axios').default;



export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginButton(username, password) {

    var un = username;
    var pw = password;
  
    validateForm();
    console.log(un, pw, " onclick login event");
  
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

  function handleSubmit(event) {
    event.preventDefault();
  }

  function validateForm() {
    console.log(username, password, " validateForm");
    return username.length > 0 && password.length > 0;
  }

  return (
    <div className="Login">
        <Form onSubmit={handleSubmit}> 
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                autoFocus
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            {/*<Button block size="lg" type="submit" disabled={!validateForm()}> Login </Button>*/}
            <button type="submit" onClick= {() => loginButton(username, password)}> Kirjaudu </button>
          </Form>
    </div>
  );
}