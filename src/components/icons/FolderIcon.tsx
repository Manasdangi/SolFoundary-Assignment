import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const FolderIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 15.625V5a1.25 1.25 0 0 1 1.25-1.25h4.375L10 5.625h6.25A1.25 1.25 0 0 1 17.5 6.875v8.75a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25Z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FolderIcon;
