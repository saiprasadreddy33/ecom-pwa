import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto">
        <p className="text-center">&copy; {new Date().getFullYear()} E-Commerce Store.</p>
      </div>
    </footer>
  );
}

export default Footer;
