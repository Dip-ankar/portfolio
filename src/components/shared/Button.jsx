import React from 'react';

// This is a simple button wrapper for consistent styling
const Button = ({ href, download, children }) => {
  return (
    <a
      href={href}
      download={download}
      className="inline-block bg-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 transition duration-300"
    >
      {children}
    </a>
  );
};

export default Button;