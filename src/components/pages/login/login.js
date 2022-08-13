import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://codingtek.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,

        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      window.location.href = "/index";
    } else {
      alert("Please check your email and password");
    }
    console.log(data);
  };
  return (
    <div className=" auth-log p-4 reg-bg">
      <h3 className="text-center mb-3">Login</h3>
      <Form className=" m-auto" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-2">
          Login
        </Button>
      </Form>
      <h6 className="mt-4 text-center">
        Not a user? <Link to="/register">Sign Up</Link>
      </h6>
    </div>
  );
};

export default Login;
