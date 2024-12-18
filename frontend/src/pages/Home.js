import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/header';

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUsername(loggedInUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleViewPolls = () => {
    navigate('/active-polls');
  };
  
  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    // Clear the stored user data
    localStorage.removeItem('loggedInUser');
    // Update state
    setIsLoggedIn(false);
    setUsername('');
    // Navigate back to home
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {isLoggedIn ? (
          
          // Logged in view
          <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-8 shadow-md">
            
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
              Welcome, {username}!
            </h2>
            <div className="space-y-4">
              <button 
                onClick={handleViewPolls}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors text-lg font-medium"
              >
                View Active Polls
              </button>
              <button 
                  onClick={handleLogOut}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Log Out
                </button>
            </div>
            <div className="text-center mt-16">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Live polling made simple
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Engage in meaningful conversations through polls and comments.
                Vote and discuss with our growing community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Real-time Results</h3>
                <p className="text-gray-600">Watch votes and discussions unfold in real-time</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Join Discussions</h3>
                <p className="text-gray-600">Share your thoughts and engage with others</p>
              </div>
            </div>
          </div>
          
          
        ) : (
          // Guest view
          <>
            <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
                Welcome to Pollosophy
              </h2>
              <div className="space-y-4">
                <button 
                  onClick={handleLogIn}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Log In
                </button>
                <button 
                  onClick={handleSignUp}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Sign Up
                </button>
                <button 
                  onClick={handleViewPolls}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors text-lg font-medium"
                >
                  View Active Polls
                </button>
              </div>
              <p className="text-center mt-6 text-sm text-blue-900">
                You can view polls without an account
              </p>
            </div>

            <div className="text-center mt-16">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Live polling made simple
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Engage in meaningful conversations through polls and comments.
                Vote and discuss with our growing community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Real-time Results</h3>
                <p className="text-gray-600">Watch votes and discussions unfold in real-time</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Join Discussions</h3>
                <p className="text-gray-600">Share your thoughts and engage with others</p>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;