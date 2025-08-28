import React from 'react';

export const ControlButton = ({ onClick, isFinished }) => {
  return (
    <button
      onClick={onClick}
      disabled={isFinished}
      className={`px-6 py-3 font-bold rounded-lg shadow-lg transition-colors ${
        isFinished ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
      }`}
    >
      {isFinished ? 'PROCESO FINALIZADO' : 'SIGUIENTE PASO'}
    </button>
  );
};