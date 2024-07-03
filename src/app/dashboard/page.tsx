import React from 'react';
import { auth } from "@clerk/nextjs/server";

export default function Dashboard() {
  const { userId } = auth();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="mb-4">Your user ID is: {userId}</p>
      {/* We'll add more dashboard functionality here later */}
    </div>
  );
}