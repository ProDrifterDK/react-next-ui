import React from "react";

interface ClearIconProps {
    className?: string;
}

const ClearIcon: React.FC<ClearIconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className || "h-5 w-5"}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default ClearIcon;
