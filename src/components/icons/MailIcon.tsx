import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const MailIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.125 4.375h13.75c.69 0 1.25.56 1.25 1.25v8.75c0 .69-.56 1.25-1.25 1.25H3.125c-.69 0-1.25-.56-1.25-1.25v-8.75c0-.69.56-1.25 1.25-1.25Z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m18.125 5.625-7.5 5.208a1.25 1.25 0 0 1-1.25 0l-7.5-5.208"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;
