import React from "react";
import useModalStore from "../store/useModalStore";
import BookmarkIcon from "../icons/BookmarkIcon";

const AssetModal: React.FC = () => {
    const { isOpen, selectedItem, closeModal } = useModalStore();

    if (!isOpen || !selectedItem) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg max-w-xl w-full p-6 relative">
                <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={closeModal}
                    aria-label="Close Modal"
                >
                    <span className="sr-only">Close Modal</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-black mb-4">{selectedItem.title}</h2>
                    <p className="text-sm text-gray-500 mb-4">{selectedItem.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {selectedItem.tags?.map((tag: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 border border-200"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 mb-4 justify-between items-center">
                        <div className="flex-1 text-center border-r border-gray-300 last:border-r-0">
                            <h3 className="font-medium text-black">Used</h3>
                            <p className="text-md text-gray-400">{selectedItem.metrics.used}</p>
                        </div>
                        <div className="flex-1 text-center border-r border-gray-300 last:border-r-0">
                            <h3 className="font-medium text-black">Type</h3>
                            <p className="text-md text-gray-400">{selectedItem.metrics.type}</p>
                        </div>
                        <div className="flex-1 text-center border-r border-gray-300 last:border-r-0">
                            <h3 className="font-medium text-black">Pages</h3>
                            <p className="text-md text-gray-400">{selectedItem.metrics.pages}</p>
                        </div>
                        <div className="flex-1 text-center">
                            <h3 className="font-medium text-black">Last Updated</h3>
                            <p className="text-md text-gray-400">{selectedItem.metrics.lastUpdated}</p>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-medium text-black text-xl mb-2">Business Questions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {selectedItem.questions?.map((question: string, index: number) => (
                            <div
                                key={index}
                                className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-center"
                            >
                                <p className="text-gray-600 text-center">{question}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-900 w-full mb-4 flex items-center justify-center gap-2"
                        title="Favorite Item"
                        aria-label="Favorite Item"
                    >
                        <BookmarkIcon />
                        <span>Favorite Item</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssetModal;
