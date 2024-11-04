import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';


const Question = ({ data }) => {
  
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (selectedChoice != null){
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">{data.question}</h2>
      <div className="space-y-3">
        {data.choices.map((choice) => (
          <div key={choice.id} className="flex-items-center">
            <input 
              type="radio"
              id={'choice-${data.id}-${choice.id}'}
              name={'poll-${data.id}'}
              className='mr-3'
              disabled={hasVoted}
              onChange={() => setSelectedChoice(choice.id)}
              checked={selectedChoice === choice.id}
            />
            <label
              htmlFor={'choice-${data.id}-${choice.id}'}
              className="text-blue-700 cirsor-pointer"
            >
              {choice.text}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button 
          onClick={handleVote}
          disabled={selectedChoice === null || hasVoted}
          className={`px-4 py-2 rounded-md ${
            hasVoted
              ? 'bg-blue-300 text-white cursor-not-allowed'
              : selectedChoice === null
              ? 'bg-blue-400 text-white cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {hasVoted ? 'Voted' : 'Sumbit Vote'}
        </button>

      </div>
    </div>
  );
};

const ActivePolls = () => {
  const navigate = useNavigate();
  
  const [polls] = useState([
    {
      id: 1,
      question: "What's your favorite programming language?",
      choices: [
        { id: 1, text: "JavaScript" },
        { id: 2, text: "Python" },
        { id: 3, text: "Java" },
        { id: 4, text: "C++" }
      ],
      userVoted: false
    },
    {
      id: 3,
      question: "What's your preferred work environment?",
      choices: [
        { id: 1, text: "Fully remote"},
        { id: 2, text: "Hybrid"},
        { id: 3, text: "Office-based"},
      ],
      userVoted: false
    }, 
    {
      id: 3,
      question: "What's your favorite holiday?",
      choices: [
        { id: 1, text: "Christmas"},
        { id: 2, text: "Halloween"},
        { id: 3, text: "Thanksgiving"}
      ],
      userVoted: false
    }
  ]);

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800">Active Polls</h1>
          </div>
          <div className='space-y-4'>
            {polls.map((poll) => (
              <Question key={poll.id} data={poll}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivePolls;