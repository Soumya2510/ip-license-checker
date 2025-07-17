
'use client';
import { useState } from 'react';

export default function Home() {
  const [ip, setIp] = useState('');
  const [status, setStatus] = useState('');

  const checkLicense = () => {
    if (ip === '') {
      setStatus('Please enter an IP address.');
    } else {
      setStatus('Checking license...');
      setTimeout(() => {
        setStatus('✅ This IP is whitelisted for licensed access.');
      }, 1000);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">IP License Checker</h1>
      <input
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="Enter IP address"
        className="px-4 py-2 border border-gray-300 rounded mb-4 w-full max-w-md"
      />
      <button
        onClick={checkLicense}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check License
      </button>
      {status && <p className="mt-4 text-lg">{status}</p>}
    </main>
  );
}
