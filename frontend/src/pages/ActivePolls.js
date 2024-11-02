import React from 'react';
import Header from '../components/header';

const ActivePolls = () => {
  
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Active Polls</h1>
        {/* Add your polls list here */}
      </main>
    </div>
  );
};

export default ActivePolls;