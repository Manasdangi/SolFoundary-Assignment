import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const HashIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.29167 3.125L5.625 16.875M14.375 3.125L12.7083 16.875M3.125 6.45833H16.875M16.875 13.5417H3.125"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HashIcon;
