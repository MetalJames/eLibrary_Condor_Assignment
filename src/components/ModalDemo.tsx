import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">{text} Successful</h3>
            <p>This is just a demo.</p>
            <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
            Close
            </button>
        </div>
        </div>
    );
};

export default Modal;
