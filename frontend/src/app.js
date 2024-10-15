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

// Polls Component
const Polls = () => {
  const [polls] = useState([
    { id: 1, question: "What's your favorite programming language?", options: ["JavaScript", "Python", "Java", "C++"] },

  ]);

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Current Polls</h2>
      {polls.map(poll => (
        <div key={poll.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-xl font-semibold mb-2">{poll.question}</h3>
          <ul className="space-y-2">
            {poll.options.map((option, index) => (
              <li key={index} className="flex items-center">
                <input type="radio" id={`poll-${poll.id}-option-${index}`} name={`poll-${poll.id}`} className="mr-2" />
                <label htmlFor={`poll-${poll.id}-option-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Vote
          </button>
        </div>
      ))}
    </div>
  );
};



// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'polls':
        return <Polls />;
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