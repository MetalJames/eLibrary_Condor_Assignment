import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';

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

const SeeBookDetailes: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const bookId = parseInt(query.get('bookId') || '0', 10);
    const book = books.find(b => b.id === bookId);

    const { selectedBooks, addBook } = useBookContext();

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
        //alert('Added to rental list!');
        showModalWithTimeout();
    };

    if (!book) {
        return <div className="container mx-auto p-4 text-center">Book not found</div>;
    }

    return (
        <div className="container mx-auto p-6 flex justify-center items-center">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{book.title}</h2>
                <p className="text-lg text-gray-600 mb-2"><strong>Author:</strong> {book.author}</p>
                <p className="text-lg text-gray-600 mb-2"><strong>Genre:</strong> {book.genre}</p>
                <p className="text-lg text-gray-600 mb-2"><strong>Cost:</strong> ${book.cost}</p>
                <p className="text-lg text-gray-600 mb-2"><strong>Rental Period:</strong> {book.rentalPeriod}</p>
                <p className="text-lg text-gray-600 mb-4"><strong>Additional Info:</strong> {book.additionalInfo}</p>
                <div className='flex justify-between'>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition duration-300"
                    >
                        Back
                    </button>
                    <button
                        className={`bg-${selectedBooks.includes(book.id) || !book.available ? 'gray' : 'blue'}-500 text-white p-3 rounded-lg flex-1 ml-4 transition duration-300 ${selectedBooks.includes(book.id) || !book.available ? '' : 'hover:bg-blue-600'}`}
                        disabled={selectedBooks.includes(book.id) || !book.available}
                        onClick={() => handleAddToRent(book.id)}
                    >
                        {selectedBooks.includes(book.id) ? 'Added' : 'Add to Rent'}
                    </button>
                </div>
            </div>
            {showModal && (
                <div className="modal-wrapper fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
                    <div className="bg-blue-500 text-white p-4 rounded shadow-lg">
                        Added to rental list!
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeeBookDetailes;
