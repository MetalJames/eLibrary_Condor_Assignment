import React from 'react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGoHome: () => void;
    onViewBooks: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, onGoHome, onViewBooks }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h3 className="text-lg font-semibold mb-4">Rental Successful!</h3>
                <p className="mb-4">Your rental has been processed successfully.</p>
                <div className="flex justify-around mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={onGoHome}
                    >
                        Go Home
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={onViewBooks}
                    >
                        View Other Books
                    </button>
                </div>
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={onClose}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
