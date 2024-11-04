import React, { useState } from 'react';
import Header from '../components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import accounts from '../components/AccountData'
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./PageStyle.css";

function SignUp() {
	// Making usestate for initialzing and fetching a value
	const [username, setuser] = useState("");
	const [password, setpass] = useState("");

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	//Function for creating an account
	const accountCreation = (e) => {
		e.preventDefault(); // Prevent reload

		const ids = uuid();
		let uni = ids.slice(0,8); // Slicing unique id

		// Fetching values from useState and pushing to array
		let a = username, b = password;

		// Validation
		if (username == "" || password == "") {
			alert("invalid");
			return;
		}
		accounts.push({ user_id: uni, username: a, password: b});

		//Redirecting to home page after finishing account creation
		history("/");
	};

	return (
		<div className="min-h-screen bg-blue-50">
    		<Header />
    		<main className="container mx-auto px-6 py-16">
    			<h1 className="center-text">Account Creation</h1>
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
    							setuser(e.target.value)
    						}
    						type="text"
    						placeholder="Enter Name"
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
    							setpass(e.target.value)
    						}
    						type="text"
    						placeholder="Enter Password"
    						required
    					/>
    				</Form.Group>

    				{/* Event of user pressing the Create button*/}
    				<Button
    					onClick={(e) => accountCreation(e)}
    					variant="primary"
    					type="submit"
    				>
    					Create
    				</Button>

    			</Form>
    		</main>
		</div>
	);
}

export default SignUp;