import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActivePolls from './pages/ActivePolls';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active-polls" element={<ActivePolls />} />
        <Route path="/sign-up" element ={<SignUp />} />
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </Router>
  );
};

export default App;