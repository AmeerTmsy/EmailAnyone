import React from 'react';

function Success({ onGoBack }) {
  return (
    <div className="flex flex-col h-screen items-center justify-center min-h-[300px] p-6" style={{ backgroundColor: '#ec5dfc' }}>
      <div className="text-6xl mb-4 animate-bounce">🎉</div>
      <h2 className="text-xl font-semibold mb-2 text-green-900">Message Sent Successfully!</h2>
      <p className="mb-6 text-gray-700 text-center">Thank you for reaching out. We'll get back to you soon.</p>
      <button
        onClick={onGoBack}
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
      >
        Go Back
      </button>
    </div>
  );
}

export default Success; 