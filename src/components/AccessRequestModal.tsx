import React, { useState } from 'react';
import useModalStore from '../store/useModalStore';

const AccessRequestModal: React.FC = () => {
    const { isAccessRequestModalOpen, closeAccessRequestModal } = useModalStore();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [resource, setResource] = useState("");
    const [reason, setReason] = useState("");

    const resetForm = () => {
        setFullName("");
        setEmail("");
        setResource("");
        setReason("");
    };

    const handleCloseModal = () => {
        resetForm();
        closeAccessRequestModal();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ fullName, email, resource, reason });
        handleCloseModal();
    };

    const handleOverlayClick = () => {
        handleCloseModal();
    };

    const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isAccessRequestModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOverlayClick}>
            <div className="bg-white rounded-lg max-w-sm w-full p-6 relative" onClick={handleModalContentClick}>
                <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={handleCloseModal}
                    aria-label="Close Access Request Modal"
                >
                    <span className="sr-only">Close Access Request Modal</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4 text-black">Request Access</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName" className="block text-gray-600 mb-2">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full p-2 border rounded mb-4 text-gray-800"
                        placeholder="Full Name"
                        required
                    />
                    <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded mb-4 text-gray-800"
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="resource" className="block text-gray-600 mb-2">Resource</label>
                    <select
                        id="resource"
                        value={resource}
                        onChange={(e) => setResource(e.target.value)}
                        className="w-full p-2 border rounded mb-4 text-gray-800"
                        required
                    >
                        <option value="" disabled>Select Resource</option>
                        <option value="Resource A">Resource A</option>
                        <option value="Resource B">Resource B</option>
                        <option value="Resource C">Resource C</option>
                    </select>
                    <label htmlFor="reason" className="block text-gray-600 mb-2">Reason for Access</label>
                    <textarea
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full p-2 border rounded mb-4 text-gray-800"
                        placeholder="Reason for access"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 w-full"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccessRequestModal;
