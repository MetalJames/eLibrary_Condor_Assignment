import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Add login logic here
        alert('Login successful');
    };

    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-stretch justify-center py-40">
            {/* Main Content */}
            <div className="flex flex-col flex-1 w-full md:w-1/2 max-w-md p-4 bg-white shadow-md rounded mr-10">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">Login</button>
                </form>
            </div>

            {/* Aside Section */}
            <aside className="flex-1 mt-8 md:mt-0 md:w-1/2 max-w-md p-4 bg-gray-100 border border-gray-200 rounded shadow-md ml-10">
                <h3 className="text-xl font-semibold mb-2">Welcome to Your Catalogue!</h3>
                <p className="mb-2">Here's what's for you…</p>
                <ul className="list-disc ml-4 space-y-2">
                    <li>Find what you want with a better search.</li>
                    <li>Track your borrowing.</li>
                    <li>Rate and review titles you borrow, and share your opinions on them.</li>
                    <li>Get personalized recommendations.</li>
                </ul>
            </aside>
        </div>
    );
};

export default LoginPage;
