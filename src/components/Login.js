import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        <Form>
        <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
          />
        </Form>
        <Form>
        <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
          />
          </Form>
    </div>
  );
}