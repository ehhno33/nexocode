'use client';

import React from 'react';
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const AuthButtons: React.FC = () => {
  const { isSignedIn } = useUser();

  return (
    <nav>
      {isSignedIn ? (
        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </button>
        </SignOutButton>
      ) : (
        <SignInButton mode="modal">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </SignInButton>
      )}
    </nav>
  );
};

export default AuthButtons;