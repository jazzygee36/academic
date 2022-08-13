import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://codingtek.herokuapp.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      }
    );
    const data = await response.json();
    if (data.status === "ok") {
      navigate("/login");
    }
    console.log(data);
  };
  return (
    <div className=" auth-log p-4 reg-bg">
      <h3 className="text-center mb-3">Register</h3>
      <Form className=" m-auto" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="enter fullname"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" mb-4"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted text-sm">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="number"
            placeholder="enter phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-2">
          Register
        </Button>
      </Form>
      <h6 className="mt-4 text-center">
        Not a user? <Link to="/login">Login</Link>
      </h6>
    </div>
  );
};

export default Register;
