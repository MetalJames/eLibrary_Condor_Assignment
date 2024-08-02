// import React from 'react';
// import { useNavigate } from "react-router-dom";

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     genre: string;
//     available: boolean;
// }

// const books: Book[] = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', available: true },
//     { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', available: false },
//     { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', available: true },
//     { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Classic', available: true },
//     { id: 5, title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure', available: false },
//     // Add more books here to make a total of 12
//     // For example:
//     { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic', available: true },
//     { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', available: true },
//     { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', available: true },
//     { id: 9, title: 'The Odyssey', author: 'Homer', genre: 'Classic', available: true },
//     { id: 10, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror', available: true },
//     { id: 11, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror', available: false },
//     { id: 12, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', available: true },
// ];

// const genres = Array.from(new Set(books.map(book => book.genre))); // Unique genres

// const ViewBooksPage: React.FC = () => {
//     const navigate = useNavigate();

//     const handleRent = (bookId: number) => {
//         navigate(`/rent-books?bookId=${bookId}`);
//     };

//     return (
//         <div className="container mx-auto p-4 flex">
//             {/* Aside Section */}
//             <aside className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
//                 <h3 className="text-xl font-semibold mb-4">Genres</h3>
//                 <ul className="list-disc pl-4">
//                     {genres.map((genre, index) => (
//                         <li key={index} className="mb-2">{genre}</li>
//                     ))}
//                 </ul>
//             </aside>

//             {/* Main Content */}
//             <main className="flex-grow p-4">
//                 <h2 className="text-2xl mb-4">View Books</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     {books.map((book) => (
//                         <div key={book.id} className="bg-white p-4 shadow-md rounded">
//                             <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
//                             <p className="text-gray-700 mb-2">Author: {book.author}</p>
//                             <p className="text-gray-700 mb-2">Genre: {book.genre}</p>
//                             <p className={`text-${book.available ? 'green' : 'red'}-500 mb-4`}>
//                                 {book.available ? 'Available' : 'Not Available'}
//                             </p>
//                             <button
//                                 className={`bg-${book.available ? 'blue' : 'gray'}-500 text-white p-2 rounded w-full`}
//                                 disabled={!book.available}
//                                 onClick={() => handleRent(book.id)}
//                             >
//                                 Rent Me
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default ViewBooksPage;




import React from 'react';
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
    // Add more books here to make a total of 12
    // For example:
    { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic', available: true },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', available: true },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', available: true },
    { id: 9, title: 'The Odyssey', author: 'Homer', genre: 'Classic', available: true },
    { id: 10, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror', available: true },
    { id: 11, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror', available: false },
    { id: 12, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', available: true },
];

const genres = Array.from(new Set(books.map(book => book.genre))); // Unique genres

const ViewBooksPage: React.FC = () => {
    const { selectedBooks, addBook } = useBookContext();
    const navigate = useNavigate();

    const handleAddToRent = (bookId: number) => {
        addBook(bookId);
        alert('Added to rental list!');
    };

    const handleSeeBook = (bookId: number) => {
        navigate(`/see-book?bookId=${bookId}`);
    };

    const handleRent = () => {
        if (selectedBooks.length === 0) {
            alert('No books selected');
            return;
        }
        navigate(`/rent-books?bookId=${selectedBooks.join('&bookId=')}`);
    };

    return (
        <div className="container mx-auto p-4 flex">
            {/* Aside Section */}
            <aside className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
                <h3 className="text-xl font-semibold mb-4">Genres</h3>
                <ul className="list-disc pl-4">
                    {genres.map((genre, index) => (
                        <li key={index} className="mb-2">{genre}</li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-4">
                <h2 className="text-2xl mb-4">View Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {books.map((book) => (
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
                {selectedBooks.length > 0 && (
                    <button
                        className="bg-blue-500 text-white p-2 rounded w-full mt-4"
                        onClick={handleRent}
                    >
                        Proceed to Rent Books
                    </button>
                )}
            </main>
        </div>
    );
};

export default ViewBooksPage;