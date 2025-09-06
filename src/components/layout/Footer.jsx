import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-center py-5">
      <p className="text-gray-500">
        &copy; {year} Dipankar Mandal. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;