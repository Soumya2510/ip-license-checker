'use client';
import { useEffect, useState } from 'react';

// Import IPs from JSON file
import licensedIPs from '../licensed-ips.json';

export default function Home() {
  const [ip, setIp] = useState('');
  const [status, setStatus] = useState('');
  const [detected, setDetected] = useState(false);

  // Detect user's IP automatically
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        setIp(data.ip);
        setDetected(true);
      })
      .catch(() => {
        setStatus('⚠️ Failed to detect your IP.');
        setDetected(false);
      });
  }, []);

  const checkLicense = () => {
    if (ip === '') {
      setStatus('❗ Please enter an IP address.');
    } else if (licensedIPs.includes(ip.trim())) {
      setStatus('✅ This IP is whitelisted for licensed access.');
    } else {
      setStatus('❌ This IP is not licensed for access.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">🌐 IP License Checker</h1>

        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Enter IP address"
          className="px-4 py-3 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={checkLicense}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          🔍 Check License
        </button>

        {status && (
          <p className="mt-4 text-center text-lg font-medium">
            {status}
          </p>
        )}

        {detected && (
          <p className="mt-2 text-center text-sm text-gray-500">Your IP was auto-detected</p>
        )}
      </div>
    </main>
  );
}
