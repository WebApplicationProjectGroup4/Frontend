import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        <Form onSubmit={handleSubmit}> 
        <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(event) => setUsername(e.target.value)}
          />
          
        </Form>
        <Form>
        <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChagne={(event) => setPassword(e.target.value)}
          />
          </Form>
    </div>
  );
}