import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Header from '../components/header';
import { Button, Form } from "react-bootstrap";
import accounts from '../components/AccountData'
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./PageStyle.css";

function SignUp() {
    const navigate = useNavigate();
    const [username, setuser] = useState("");
    const [password, setpass] = useState("");
    const [email, setemail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSignedUp, setIsSignedUp] = useState(false);  

    const handleLogIn = () => {
        navigate('/login');
    }

    let history = useNavigate();

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Check if email already exists
    const isEmailExists = (email) => {
        return accounts.some(account => account.email === email);
    };

    const accountCreation = (e) => {
        e.preventDefault();

        // Reset email error
        setEmailError("");

        // Email validation
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        // Check for existing email
        if (isEmailExists(email)) {
            setEmailError("This email is already registered");
            return;
        }

        // Basic validation
        if (username === "" || password === "" || email === "") {
            alert("All fields are required");
            return;
        }

        // Password validation
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }

        const ids = uuid();
        let uni = ids.slice(0, 8);

        const newAccount = {
            user_id: ids,
            username,
            password,
            email,
        };

        accounts.push(newAccount);
        setIsSignedUp(true);  
    };

    // Add this conditional render
    if (isSignedUp) {
        return (
            <div className="min-h-screen bg-blue-50">
                <Header />
                <main className="container mx-auto px-6 py-16">
                    <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-8 shadow-md">
                        <h1 className="text-2xl font-medium text-blue-900 mb-4">
                            Hello, {username}!
                        </h1>
                        <p className="text-blue-700 mb-6">
                            Your account has been successfully created.
                        </p>
                        <Button 
                            onClick={handleLogIn}
                            variant="primary"
                        >
                            Proceed to Login
                        </Button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-blue-50">
            <Header />
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-8 shadow-md">
                    <h1 className="text-2xl font-medium text-blue-900 mb-8">Sign-up</h1>
                    <Form
                        className="d-grid gap-2"
                        style={{ margin: "5rem" }}
                    >
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                        >
                            <Form.Control
                                onChange={(e) => {
                                    setemail(e.target.value);
                                    setEmailError(""); // Clear error when user types
                                }}
                                type="email"
                                placeholder="Enter Email"
                                required
                                isInvalid={!!emailError}
                            />
                            <Form.Control.Feedback type="invalid">
                                {emailError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicName"
                        >
                            <Form.Control
                                onChange={(e) => setuser(e.target.value)}
                                type="text"
                                placeholder="Enter Username"
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Control
                                onChange={(e) => setpass(e.target.value)}
                                type="password"
                                placeholder="Enter Password"
                                required
                            />
                            <Form.Text className="text-muted">
                                Password must be at least 8 characters long
                            </Form.Text>
                        </Form.Group>

                        <Button
                            onClick={(e) => accountCreation(e)}
                            variant="primary"
                            type="submit"
                        >
                            Create
                        </Button>

                        <p className="text-center text-sm text-blue-900">
                            Have an account?
                        </p>

                        <button onClick={handleLogIn}
                            className="text-sm text-blue-900"
                        >
                            Log in
                        </button>
                    </Form>
                </div>
            </main>
        </div>
    );
}

export default SignUp;