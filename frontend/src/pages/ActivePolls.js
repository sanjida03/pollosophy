import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

const Comment = ({ comment, onDelete, isAuthor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium text-blue-800">{comment.author}</p>
          <p className="text-gray-600 mt-1">{comment.text}</p>
          <p className="text-xs text-gray-400 mt-1">{comment.timestamp}</p>
        </div>
        {isAuthor && (
          <button
            onClick={() => onDelete(comment.id)}
            className="text-red-500 hover:text-red-600 text-sm"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

const CommentSection = ({ pollId, isAuthenticated }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      pollId,
      author: 'Current User', 
      text: newComment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  if (!showComments) {
    return (
      <button
        onClick={() => setShowComments(true)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mt-4"
      >
        <span>Show Comments ({comments.length})</span>
      </button>
    );
  }

  return (
    <div className="mt-4">
      <button
        onClick={() => setShowComments(false)}
        className="text-blue-600 hover:text-blue-700 mb-4"
      >
        Hide Comments
      </button>
      
      {isAuthenticated && (
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full h-8 border-blue-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
          <button
            onClick={handleAddComment}
            disabled={!newComment.trim()}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            Post Comment
          </button>
        </div>
      )}

      <div className="space-y-2">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={handleDeleteComment}
            isAuthor={true} // In a real app, compare with current user
          />
        ))}
        {comments.length === 0 && (
          <p className="text-gray-500 text-center py-4">No comments yet</p>
        )}
      </div>
    </div>
  );
};

const Question = ({ data, isAuthenticated }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [setShowLoginAlert] = useState(false);

  const handleVote = () => {
    if (!isAuthenticated) {
      setShowLoginAlert(true);
      return;
    }
    
    if (selectedChoice != null) {
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">{data.question}</h2>

      <div className="space-y-3">
        {data.choices.map((choice) => (
          <div key={choice.id} className="flex items-center">
            <input 
              type="radio"
              id={`choice-${data.id}-${choice.id}`}
              name={`poll-${data.id}`}
              className="mr-3"
              disabled={hasVoted || !isAuthenticated}
              onChange={() => setSelectedChoice(choice.id)}
              checked={selectedChoice === choice.id}
            />
            <label
              htmlFor={`choice-${data.id}-${choice.id}`}
              className={`cursor-pointer ${
                !isAuthenticated ? 'text-gray-500' : 'text-blue-700'
              }`}
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
          {hasVoted ? 'Voted' : 'Submit Vote'}
        </button>
      </div>

      <CommentSection pollId={data.id} isAuthenticated={isAuthenticated} />
    </div>
  );
};

const ActivePolls = () => {
  const navigate = useNavigate();
  const [isAuthenticated] = useState(false);
  
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
      id: 2,
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
            {!isAuthenticated && (
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Log in to Vote
              </button>
            )}
          </div>
          <div className="space-y-4">
            {polls.map((poll) => (
              <Question 
                key={poll.id} 
                data={poll} 
                isAuthenticated={isAuthenticated}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivePolls;