import React from 'react';
import { Link } from 'react-router-dom';
import { HeroBanner } from '../assets/'

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 px-4">Welcome to Condor eLibrary</h1>
            <p className="mb-8 px-4">
                Condor eLibrary is your one-stop destination for accessing a wide
                variety of books online. Whether you want to rent books or simply
                browse through our extensive collection, we have something for
                everyone. Our user-friendly platform makes it easy to find and enjoy
                your next great read. Join our community of book lovers today!
            </p>

            <div className="flex flex-col md:flex-row">
            <main className="md:w-3/4 md:pr-4">
                {/* New Section with Statistics */}
                <section className="bg-gray-100 p-4 rounded mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Unlimited, simultaneous access to:
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li>10K+ Editorially maintained Research Topic pages</li>
                            <hr className="border-t-2 border-gray-300 my-6 sm:hidden" />
                            <li>7M+ Rights-cleared photos and graphics</li>
                            <hr className="border-t-2 border-gray-300 my-6 sm:hidden" />
                        </ul>
                        <ul className="space-y-2">
                            <li>200+ Newspapers</li>
                            <hr className="border-t-2 border-gray-300 my-6 sm:hidden" />
                            <li>160+ Encyclopedias and other reference books</li>
                        </ul>
                    </div>
                </section>
                {/* Section with Random Info and Image */}
                <section className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-2/3 p-4">
                        <h2 className="text-2xl font-semibold mb-4">
                        Discover the World of Knowledge
                        </h2>
                        <p>
                        Explore our vast collection of books, research materials, and
                        educational resources to enhance your learning experience.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <img
                        src={HeroBanner}
                        alt="Discover Knowledge"
                        className="w-full rounded"
                        />
                    </div>
                </section>

                {/* ProQuest Advantage Section */}
                <section className="bg-gray-100 p-4 rounded mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    The ProQuest Advantage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Designed by EdTech Experts for Teaching, Learning and
                            Research Success
                        </h3>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-6 sm:hidden" />
                    <div>
                        <h3 className="text-xl font-semibold">
                            Age-Appropriate Content
                        </h3>
                        <p>
                            Editorially vetted information built around core curricula
                            and aligned with classroom assignments
                        </p>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-6 sm:hidden" />
                    <div>
                        <h3 className="text-xl font-semibold">Outcome-Oriented</h3>
                        <p>
                            High-quality resources that engage students and support
                            classrooms with interactive media
                        </p>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-6 sm:hidden" />
                    <div>
                        <h3 className="text-xl font-semibold">
                            Workflows That Guide Novice Users
                        </h3>
                        <p>
                            Intuitive, made-for-purpose interfaces focus and engage
                            young learners on their highest value tasks, so they use
                            time efficiently
                        </p>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-6 sm:hidden" />
                    <div>
                        <h3 className="text-xl font-semibold">
                            Modern, Intuitive, Responsive and Accessible
                        </h3>
                        <p>
                            Today’s on-the-go users can access information anywhere,
                            anytime – even offline
                        </p>
                    </div>
                </div>
                </section>

                <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/4 md:pr-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            to="/view-books"
                            className="block p-4 border border-gray-300 rounded shadow hover:bg-gray-100"
                        >
                            <h2 className="text-xl font-semibold mb-2">View Books</h2>
                            <p>Browse through our extensive collection of books.</p>
                        </Link>
                        <Link
                            to="/rent-books"
                            className="block p-4 border border-gray-300 rounded shadow hover:bg-gray-100"
                        >
                            <h2 className="text-xl font-semibold mb-2">Rent Books</h2>
                            <p>Rent your favorite books easily and conveniently.</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </main>

            <aside className="md:w-1/4 mt-4 md:mt-0 border-l border-gray-200 pl-4">
                <h2 className="text-xl font-semibold mb-2">New Books Available</h2>
                <ul>
                <li className="mb-4">
                    <h3 className="font-bold">The Great Gatsby</h3>
                    <p>by F. Scott Fitzgerald</p>
                    <Link
                    to="/view-books"
                    className="text-blue-500 hover:underline"
                    >
                    View Details
                    </Link>
                </li>
                <li className="mb-4">
                    <h3 className="font-bold">1984</h3>
                    <p>by George Orwell</p>
                    <Link
                    to="/view-books"
                    className="text-blue-500 hover:underline"
                    >
                    View Details
                    </Link>
                </li>
                <li>
                    <h3 className="font-bold">To Kill a Mockingbird</h3>
                    <p>by Harper Lee</p>
                    <Link
                    to="/view-books"
                    className="text-blue-500 hover:underline"
                    >
                    View Details
                    </Link>
                </li>
                </ul>
            </aside>
            </div>
        </div>
    );
};

export default HomePage;
