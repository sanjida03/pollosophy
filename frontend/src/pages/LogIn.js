import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Header from '../components/header';
import { Button, Form } from "react-bootstrap";
import accounts from '../components/AccountData'
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./PageStyle.css";

function LogIn() {
  const navigate = useNavigate();
  const [username, getuser] = useState("");
  const [password, getpass] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSignUp = () => {
    navigate('/sign-up')
  }

  let history = useNavigate();
  
  const accountAuthetication = (e) => {
    e.preventDefault();

    let a = username, b = password;

    if (username === "" || password === "") {
      alert("invalid");
      return;
    }

    let pass = 0;
    
    accounts.forEach((x) => {
      if (x.username === a && x.password === b) {
        pass = 1;
        setLoggedIn(true); // Set login status before navigation
        localStorage.setItem('loggedInUser', username);
      }
    })

    if (pass === 0) {
      alert("invalid");
      return;
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-blue-50">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="bg-blue-100 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-medium text-blue-900">
              Hello, {username}!
            </h2>
            <p className="mt-2 text-blue-700">
              Welcome back to Pollosophy
            </p>
            <div className="mt-4">
              <Button
                onClick={() => history("/")}
                variant="primary"
              >
                Continue to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="container mx-auto px-2 py-7">
        <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-8 shadow-md">
          <h1 className="text-2xl font-medium text-blue-900 mb-8">Log-in</h1>
          <Form
            className="d-grid gap-2"
            style={{margin: "5rem" }}
          >
            <Form.Group
              className="mb-3"
              controlId="formBasicName"
            >
              <Form.Control
                onChange={(e) => getuser(e.target.value)}
                type="text"
                placeholder="Enter Username"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicName"
            >
              <Form.Control
                onChange={(e) => getpass(e.target.value)}
                type="password"
                placeholder="Enter Password"
                required
              />
            </Form.Group>

            <Button
              onClick={(e) => accountAuthetication(e)}
              variant="primary"
              type="submit"
            >
              Log In
            </Button>
            
            <p className="text-center text-sm text-blue-900">
              Don't have an account?
            </p>

            <button 
              onClick={handleSignUp}
              className="text-sm text-blue-900"
            >
              Sign Up
            </button>
          </Form>
        </div>
      </main> 
    </div>
  );
}

export default LogIn;