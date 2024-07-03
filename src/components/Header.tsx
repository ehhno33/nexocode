import React from 'react';
import AuthButtons from './AuthButtons';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Coding Assistant</h1>
      <AuthButtons />
    </header>
  );
};

export default Header;