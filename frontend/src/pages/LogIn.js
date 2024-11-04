import React from 'react';
import Header from '../components/header';

const LogIn = () => {
    return (
        <div className="min-h-screen bg-blue-50">
          <Header />
          <main className="container mx-auto px-2 py-7">
            <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-8 shadow-md">
              <h1 className="text-2xl font-medium text-blue-900 mb-8">Log-in</h1>
            </div>
        </main> 
    </div>
        
    );
};

export default LogIn;