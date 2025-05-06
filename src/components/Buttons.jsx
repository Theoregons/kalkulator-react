import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="flex items-center justify-center w-full h-16 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
