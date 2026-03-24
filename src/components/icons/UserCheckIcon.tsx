import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const UserCheckIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.625 16.875v-1.25a2.5 2.5 0 0 0-2.5-2.5H3.75a2.5 2.5 0 0 0-2.5 2.5v1.25M5.938 10.625a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM13.75 9.375l1.25 1.25 2.5-2.5"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserCheckIcon;
