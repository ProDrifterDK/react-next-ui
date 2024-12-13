import React from 'react';
import useModalStore from '../store/useModalStore';

const DataVizModal: React.FC = () => {
    const { selectedItem, isDataVizModalOpen, closeDataVizModal } = useModalStore();

    if (!isDataVizModalOpen || !selectedItem) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
        >
            <div className="bg-white rounded-lg max-w-lg w-full p-4 relative">
                <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={closeDataVizModal}
                    aria-label="Close Data Viz Modal"
                >
                    <span className="sr-only">Close Data Viz Modal</span>
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
                <h3 className="text-xl font-bold text-black mb-4">Data Visualization</h3>
                <p className="text-black">Here goes a graph or a corresponding visualization.</p>
            </div>
        </div>
    );
};

export default DataVizModal;
