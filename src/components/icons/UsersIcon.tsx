import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const UsersIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.75 16.875v-1.25a2.5 2.5 0 0 0-2.5-2.5H5a2.5 2.5 0 0 0-2.5 2.5v1.25M8.125 10.625a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.5 16.875v-1.25a2.5 2.5 0 0 0-1.875-2.42M12.5 5.205a2.5 2.5 0 0 1 0 4.84"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;
