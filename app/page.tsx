'use client';
import { useState } from 'react';

export default function Home() {
  const [ip, setIp] = useState('');
  const [status, setStatus] = useState('');

  const checkLicense = () => {
    if (ip === '') {
      setStatus('⚠️ Please enter an IP address.');
    } else {
      setStatus('⏳ Checking license...');
      setTimeout(() => {
        if (ip === '8.8.8.8' || ip === '123.123.123.123') {
          setStatus('✅ This IP is whitelisted for licensed access.');
        } else {
          setStatus('❌ This IP is not licensed.');
        }
      }, 1000);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-black p-6">
      <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center tracking-tight">
          🔐 IP License Checker
        </h1>

        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Enter IP address"
          className="w-full px-4 py-3 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />

        <button
          onClick={checkLicense}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold rounded-lg"
        >
          🔎 Check License
        </button>

        {status && (
          <p className="mt-6 text-center text-lg text-white animate-pulse">
            {status}
          </p>
        )}
      </div>
    </main>
  );
}
