import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Header from '../components/header';
import { Button, Form } from "react-bootstrap";
import accounts from '../components/AccountData'
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./PageStyle.css";

function LogIn() {
    // Making usestate for initialaing and fetching a value
  const [username, getuser] = useState("");
  const [password, getpass] = useState("");

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  const accountAuthetication = (e) => {
    e.preventDefault(); // Prevent reload

    // Fetching values from useState and pushing to array
    let a = username, b = password;

    // Validation
    if (username == "" || password == "") {
      alert("invalid");
      return;
    }

    // Authentication pass/fail value
    let pass = 0;
    
    // Loop through the local database
    accounts.forEach((x) => {
      // Check if the username and password matches from the array
      if (x.username == a && x.password == b) {
        //Redirect to home page after logging in
        history("/");
        pass = 1;
      }
    }
    )

    // Authentication failed
    if (pass == 0) {
      alert("invalid");
      return;
    }
  };
    return (
        <div className="min-h-screen bg-blue-50">
          <Header />
          <main className="container mx-auto px-2 py-7">
            <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-8 shadow-md">
              <h1 className="text-2xl font-medium text-blue-900 mb-8">Log-in</h1>
              {/* Fetching a value for username*/}
              <Form
                className="d-grid gap-2"
                style={{margin: "5rem" }}
              >
                <Form.Group
                  className="mb-3"
                  controlId="formBasicName"
                >
                  <Form.Control
                    onChange={(e) =>
                      getuser(e.target.value)
                    }
                    type="text"
                    placeholder="Enter Username"
                    required
                  />
                </Form.Group>

                {/* Fetching a value for password*/}
                <Form.Group
                  className="mb-3"
                  controlId="formBasicName"
                >
                  <Form.Control
                    onChange={(e) =>
                      getpass(e.target.value)
                    }
                    type="text"
                    placeholder="Enter Password"
                    required
                  />
                </Form.Group>

                {/* Event of user pressing the Create button*/}
                <Button
                  onClick={(e) => accountAuthetication(e)}
                  variant="primary"
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
            </div>
        </main> 
    </div>
        
    );
};

export default LogIn;