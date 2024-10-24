import React, { useState } from 'react';
import { User, Poll, Comment, PollList } from './node.js';

// Initializing the starting polls  
// (its just an example for rn, i might put this in a seperate file later)

const p1 = new Poll("What's your favorite programming language?", ["JavaScript", "Python", "Java", "C++"]);
const p2 = new Poll("Do you like CMSC447", ["Yes", "No"]);

const user1 = new User("John Doe", "john.doe@example.com", "1234");
const user2 = new User("Mary Jane", "mary.jane@example.com", "abcd");

const comment = new Comment("I love CMSC421!", user1.user_id);
const comment2 = new Comment("No, I love CMSC421 MORE!!", user2.user_id);
const comment3 = new Comment("NOO, I love CMSC421 EVEN MORE!!", user1.user_id);

p1.userComment(comment);

comment.userReply(comment2);
comment2.userReply(comment3);


const list = new PollList()
list.addPoll(p2)        
list.addPoll(p2)
list.addPoll(p2)
list.addPoll(p1)        // comments are seen most recent first

// End of initializing


// Navbar Component
const Navbar = ({ setCurrentPage }) => (
  <nav className="bg-blue-500 p-4">
    <ul className="flex space-x-4 text-white">
      <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
      <li><button onClick={() => setCurrentPage('polls')}>Polls</button></li>
      <li><button onClick={() => setCurrentPage('comments')}>Comments</button></li>
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

    //const [polls] = useState([
    //    { id: 1, question: "What's your favorite programming language?", options: ["JavaScript", "Python", "Java", "C++"] },
    //    { id: p1.poll_id, question: p1.poll_question, options: p1.poll_options },
    //  ]);
    const [polls] = useState(list.getList());
        
  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Current Polls</h2>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Make your own Poll     
      </button>
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

// Comments Component
const Comments = () => {        // Purpose of this new tab is to view the comments associated with the chosen poll 
                                // (hopefully the site will put the user on this page after clicking "vote")
  const [polls] = useState([
      { id: p1.poll_id, question: p1.poll_question, options: p1.poll_options },
        
    ]);

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
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
        </div>
      ))}
      <div> {p1.comment_section[0].comment_text} </div>
      <div> {p1.comment_section[0].replies[0].comment_text} </div>
      <div> {p1.comment_section[0].replies[0].replies[0].comment_text} </div>
      </div>
  );
};

// Home Component
const Login = () => (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
    </div>
);

// Home Component
const Register = () => (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
    </div>
);

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
        case 'polls':
          return <Polls />;
        case 'comments':
          return <Comments />;
        case 'login':
          return <Login />;
        case 'register':
          return <Register />;
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
