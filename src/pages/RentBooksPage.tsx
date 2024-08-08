import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import SuccessModal from '../components/SuccessModal';

type Book = {
    id: number;
    title: string;
    author: string;
    genre: string;
    available: boolean;
    cost: number;
    rentalPeriod: string;
    additionalInfo: string;
};

const books: Book[] = [
    // Existing books
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', available: true, cost: 5, rentalPeriod: '2 weeks', additionalInfo: 'A classic novel set in the Roaring Twenties.' },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', available: false, cost: 4, rentalPeriod: '2 weeks', additionalInfo: 'A dystopian novel about totalitarianism.' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', available: true, cost: 6, rentalPeriod: '1 month', additionalInfo: 'A novel about racial injustice in the American South.' },
    { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Classic', available: true, cost: 5, rentalPeriod: '1 month', additionalInfo: 'A novel about teenage angst and alienation.' },
    { id: 5, title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure', available: false, cost: 7, rentalPeriod: '1 month', additionalInfo: 'A novel about the quest for revenge against the white whale.' },

    // New books
    { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic', available: true, cost: 5, rentalPeriod: '2 weeks', additionalInfo: 'A novel about love and social standing in early 19th-century England.' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', available: true, cost: 6, rentalPeriod: '1 month', additionalInfo: 'A fantasy novel about the adventures of Bilbo Baggins.' },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', available: true, cost: 4, rentalPeriod: '2 weeks', additionalInfo: 'A novel exploring a technologically advanced dystopian society.' },
    { id: 9, title: 'The Odyssey', author: 'Homer', genre: 'Classic', available: true, cost: 6, rentalPeriod: '1 month', additionalInfo: 'An epic poem about the adventures of Odysseus.' },
    { id: 10, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror', available: true, cost: 5, rentalPeriod: '2 weeks', additionalInfo: 'A novel about a scientist who creates a sentient creature.' },
    { id: 11, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror', available: false, cost: 7, rentalPeriod: '1 month', additionalInfo: 'A novel about the infamous vampire Count Dracula.' },
    { id: 12, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', available: true, cost: 6, rentalPeriod: '1 month', additionalInfo: 'A series of fantasy novels set in the magical land of Narnia.' },
    { id: 13, title: 'Treasure Island', author: 'Robert Louis Stevenson', genre: 'Adventure', available: true, cost: 5,rentalPeriod: '2 weeks', additionalInfo: 'A classic adventure novel about pirates and buried treasure.' },
];

const RentBooksPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedBooks, removeBook, clearSelectedBooks } = useBookContext();
    const query = new URLSearchParams(location.search);
    const bookIdFromQuery = query.get('bookId');
    const bookIds = bookIdFromQuery ? bookIdFromQuery.split('&bookId=') : [];
    const selectedBookIds = selectedBooks.length > 0 ? selectedBooks : bookIds.map(id => parseInt(id, 10));

    const booksToDisplay = books.filter(book => selectedBookIds.includes(book.id));
    const [isModalOpen, setModalOpen] = useState(false);

    const handleConfirmRental = () => {
        // Handle rental logic here
        console.log("Confirm Rental clicked"); // Debugging line
        setModalOpen(true);
    };

    const handleGoHome = () => {
        setModalOpen(false);
        clearSelectedBooks();
        navigate('/');
    };

    const handleViewBooks = () => {
        setModalOpen(false);
        clearSelectedBooks();
        navigate('/view-books');
    };

    const handleRemoveBook = (bookId: number) => {
        removeBook(bookId);
    };

    if (booksToDisplay.length === 0) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center">
                <div className="bg-white p-6 shadow-md rounded w-full max-w-3xl">
                    <p>No books selected. Please <Link to="/view-books" className="text-blue-500 underline">browse our collection</Link> to select books to rent.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="bg-white p-6 shadow-md rounded w-full max-w-lg">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                    Back
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Rent Book</h2>
                <div className="space-y-4">
                    {booksToDisplay.map(book => (
                        <div key={book.id} className="p-4 border-b border-gray-300">
                            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                            <p className="text-gray-700 mb-2">Author: {book.author}</p>
                            <p className="text-gray-700 mb-2">Genre: {book.genre}</p>
                            <p className="text-gray-700 mb-2">Cost: ${book.cost}</p>
                            <p className="text-gray-700 mb-2">Rental Period: {book.rentalPeriod}</p>
                            <p className="text-gray-700 mb-4">Additional Info: {book.additionalInfo}</p>
                            {booksToDisplay.length > 0 && (
                                <button
                                    onClick={() => handleRemoveBook(book.id)}
                                    className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        onClick={handleConfirmRental}
                        className="bg-blue-500 text-white p-2 rounded-lg w-full mt-4 hover:bg-blue-600 transition duration-300"
                    >
                        Confirm
                    </button>
                </div>
                {isModalOpen && (
                    <SuccessModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        onGoHome={handleGoHome}
                        onViewBooks={handleViewBooks}
                    />
                )}
            </div>
        </div>
    );
};

export default RentBooksPage;