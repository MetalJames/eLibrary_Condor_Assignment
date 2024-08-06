import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../context/BookContext";

type Book = {
    id: number;
    title: string;
    author: string;
    genre: string;
    available: boolean;
}

const books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', available: true },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', available: false },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', available: true },
    { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Classic', available: true },
    { id: 5, title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure', available: false },
    { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic', available: true },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', available: true },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', available: true },
    { id: 9, title: 'The Odyssey', author: 'Homer', genre: 'Classic', available: true },
    { id: 10, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror', available: true },
    { id: 11, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror', available: false },
    { id: 12, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', available: true },
    { id: 13, title: 'Treasure Island', author: 'Robert Louis Stevenson', genre: 'Adventure', available: true },
];

const genres = Array.from(new Set(books.map(book => book.genre))); // Unique genres

const ViewBooksPage: React.FC = () => {
    const { selectedBooks, addBook } = useBookContext();
    const navigate = useNavigate();

    // Modal to let customer know he have added his book to his rent book cart
    // Add this state for managing the modal visibility
    const [showModal, setShowModal] = useState(false);

    // Function to show the modal
    const showModalWithTimeout = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000); // Hide the modal after 3 seconds
    };

    const handleAddToRent = (bookId: number) => {
        addBook(bookId);
        showModalWithTimeout();
    };

    const handleSeeBook = (bookId: number) => {
        navigate(`/see-book?bookId=${bookId}`);
    };

    // const handleRent = () => {
    //     if (selectedBooks.length === 0) {
    //         alert('No books selected');
    //         return;
    //     }
    //     navigate(`/rent-books?bookId=${selectedBooks.join('&bookId=')}`);
    // };

    // Add Genre Selection
    const [selectedGenre, setSelectedGenre] = useState('All');

    const handleGenreClick = (genre: string) => {
        setSelectedGenre(genre);
    };

    const filteredBooks = selectedGenre === 'All'
        ? books
        : books.filter((book) => book.genre === selectedGenre);


    return (
        <div className="container mx-auto p-4 flex flex-col sm:flex-row">
            {/* For Mobile View Only */}
            <h2 className="block sm:hidden text-2xl font-bold mb-4">View Books</h2>
            {/* Aside Section */}
            {/* Moblie Screen */}
            <aside className="sm:w-1/6 bg-gray-100 p-4 border-r border-gray-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Genres</h3>
                {/* Buttons for Mobile Screen */}
                <div className="flex flex-wrap sm:hidden">
                    <button
                        onClick={() => handleGenreClick('All')}
                        className={`p-2 m-1 rounded ${selectedGenre === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        All Genres
                    </button>
                    {genres.map((genre, index) => (
                        <button
                            key={index}
                            onClick={() => handleGenreClick(genre)}
                            className={`p-2 m-1 rounded ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
                {/* List for Desctop Screen */}
                <ul className="hidden md:block list-disc pl-4">
                    <li
                        onClick={() => handleGenreClick('All')}
                        className={`cursor-pointer mb-2 ${selectedGenre === 'All' ? 'underline text-blue-500' : 'text-gray-800'}`}
                    >
                        All Genres
                    </li>
                    {genres.map((genre, index) => (
                        <li
                            key={index}
                            onClick={() => handleGenreClick(genre)}
                            className={`cursor-pointer mb-2 ${selectedGenre === genre ? 'underline text-blue-500' : 'text-gray-800'}`}
                        >
                            {genre}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-4">
                <h2 className="hidden sm:block text-2xl font-bold mb-4">View Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="bg-white p-4 shadow-md rounded">
                            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                            <p className="text-gray-700 mb-2">Author: {book.author}</p>
                            <p className="text-gray-700 mb-2">Genre: {book.genre}</p>
                            <p className={`text-${book.available ? 'green' : 'red'}-500 mb-4`}>
                                {book.available ? 'Available' : 'Not Available'}
                            </p>
                            <div className="flex space-x-2">
                                <button
                                    className={`bg-${selectedBooks.includes(book.id) || !book.available ? 'gray' : 'blue'}-500 text-white p-2 rounded-lg flex-1 transition duration-300 ${selectedBooks.includes(book.id) || !book.available ? '' : 'hover:bg-blue-600'}`}
                                    disabled={selectedBooks.includes(book.id) || !book.available}
                                    onClick={() => handleAddToRent(book.id)}
                                >
                                    {selectedBooks.includes(book.id) ? 'Added' : 'Add to Rent'}
                                </button>
                                <button
                                    className="bg-green-500 text-white p-3 rounded-lg flex-1 ml-4 transition duration-300 hover:bg-green-600"
                                    onClick={() => handleSeeBook(book.id)}
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {selectedBooks.length > 0 && (
                    <button
                        className="bg-blue-500 text-white p-2 rounded w-full mt-4"
                        onClick={handleRent}
                    >
                        Proceed to Rent Books
                    </button>
                )} */}
                {showModal && (
                    <div className="modal-wrapper fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="bg-blue-500 text-white p-4 rounded shadow-lg">
                            Added to rental list!
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ViewBooksPage;