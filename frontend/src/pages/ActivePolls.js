import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

const ActivePolls = () => {
  const navigate = useNavigate();
  
  // State to track votes for each poll
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: "What's your favorite programming language?",
      choices: [
        { id: 1, text: "JavaScript", votes: 45 },
        { id: 2, text: "Python", votes: 52 },
        { id: 3, text: "Java", votes: 38 },
        { id: 4, text: "C++", votes: 15 }
      ],
      totalVotes: 150,
      userVoted: false
    },
    {
      id: 3,
      question: "What's your preferred work environment?",
      choices: [
        { id: 1, text: "Fully remote", votes: 250 },
        { id: 2, text: "Hybrid", votes: 180 },
        { id: 3, text: "Office-based", votes: 120 },
        { id: 4, text: "Flexible/Your choice", votes: 200 }
      ],
      totalVotes: 750,
      userVoted: false
    }, 
    {
      id: 3,
      question: "What's your favorite holiday?",
      choices: [
        { id: 1, text: "Christmas", votes: 250 },
        { id: 2, text: "Halloween", votes: 180 },
        { id: 3, text: "Thanksgiving", votes: 120 },
      ],
      totalVotes: 750,
      userVoted: false
    }
  ]);

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Active Polls</h1>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivePolls;