import React, { useState } from 'react';

// Navbar Component
const Navbar = ({ setCurrentPage }) => (
  <nav className="bg-blue-500 p-4">
    <ul className="flex space-x-4 text-white">
      <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
      <li><button onClick={() => setCurrentPage('polls')}>Polls</button></li>
      <li><button onClick={() => setCurrentPage('login')}>Login</button></li>
      <li><button onClick={() => setCurrentPage('register')}>Register</button></li>
    </ul>
  </nav>
);

// Home Component
const Home = () => (
  <div className="container mx-auto mt-8 p-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to Pollosophy</h1>
    <p className="text-lg">Engage in meaningful discussions through polls and comments.</p>
  </div>
);


// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;