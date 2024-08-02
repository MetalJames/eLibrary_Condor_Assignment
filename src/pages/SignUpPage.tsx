import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // Add sign-up logic here
        alert('Sign Up successful');
    };

    return (
        <div className="container mx-auto p-4 flex flex-col items-center py-[8rem]">
            {/* Main Content */}
            <div className="flex flex-col w-full md:w-1/2 max-w-md p-4 bg-white shadow-md rounded">
                <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                        <div className="flex-1 mb-4 md:mb-0">
                            <label className="block mb-2 text-gray-700">First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border border-gray-300 p-2 w-full rounded shadow-sm"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-gray-700">Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="border border-gray-300 p-2 w-full rounded shadow-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded shadow-sm"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">Sign Up</button>
                </form>
                <p className="mt-4 italic">Yes, I want this ebook!</p>
            </div>
        </div>
    );
};

export default SignUpPage;
