import React, { createContext, useState, ReactNode, useContext } from 'react';

type BookContextType = {
    selectedBooks: number[];
    addBook: (bookId: number) => void;
    removeBook: (bookId: number) => void;
    clearSelectedBooks: () => void;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedBooks, setSelectedBooks] = useState<number[]>([]);

    const addBook = (bookId: number) => {
        setSelectedBooks(prev => [...prev, bookId]);
    };

    const removeBook = (bookId: number) => {
        setSelectedBooks(prev => prev.filter(id => id !== bookId));
    };

    const clearSelectedBooks = () => setSelectedBooks([]);

    return (
        <BookContext.Provider value={{ selectedBooks, addBook, removeBook, clearSelectedBooks }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => {
    const context = useContext(BookContext);
    if (context === undefined) {
        throw new Error('useBookContext must be used within a BookProvider');
    }
    return context;
};
