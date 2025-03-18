import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Fresh Farm Produce</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/farm-sales" className="hover:text-gray-200">Farm Sales</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
