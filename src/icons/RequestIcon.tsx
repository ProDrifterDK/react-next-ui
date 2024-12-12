import React from "react";

const RequestIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = "black", ...props }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_17_3)">
            <path
                d="M8.186 1.113C8.06662 1.06516 7.93338 1.06516 7.814 1.113L1.846 3.5L4.25 4.461L10.404 2L8.186 1.113ZM11.75 2.539L5.596 5L8 5.961L14.154 3.5L11.75 2.539ZM15 4.239L8.5 6.839V15.5L15 12.161V4.239ZM7.5 14.762V6.838L1 4.239V12.162L7.5 14.762ZM7.443 0.184002C7.80057 0.0410015 8.19943 0.0410015 8.557 0.184002L15.686 3.036C15.7787 3.07315 15.8581 3.13719 15.9141 3.21989C15.9701 3.30259 16 3.40015 16 3.5V12.162C16 12.5 15.5 12.5 15.5 12.5C15 12.5 15 12 15 12.161L8.5 15.5C8.5 15.964 7.93338 16.0118 7.814 15.964L0.63 13.09C0.444251 13.016 0.284942 12.8881 0.172642 12.7226C0.0603417 12.5572 0.000206329 12.3619 0 12.162L0 3.5C2.32399e-05 3.40015 0.0299437 3.30259 0.085907 3.21989C0.14187 3.13719 0.221313 3.07315 0.314 3.036L7.443 0.184002Z"
                fill={fill}
            />
            <path d="M12.6 15.5V10.4751" stroke={fill} strokeWidth="0.8" strokeLinecap="round" />
            <path d="M10 13H15" stroke={fill} strokeWidth="0.8" strokeLinecap="round" />
        </g>
        <defs>
            <clipPath id="clip0_17_3">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default RequestIcon;
