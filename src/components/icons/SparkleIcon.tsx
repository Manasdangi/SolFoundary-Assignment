import React, { useId } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const SparkleIcon: React.FC<IconProps> = (props) => {
  const uid = useId().replace(/:/g, "");
  const gradientId = `sparkle-grad-${uid}`;

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6251 2.29169C10.6251 1.94651 10.3453 1.66669 10.0001 1.66669C9.6549 1.66669 9.37508 1.94651 9.37508 2.29169C9.37508 4.8919 8.8012 6.62145 7.71135 7.71129C6.62151 8.80113 4.89196 9.37502 2.29175 9.37502C1.94657 9.37502 1.66675 9.65484 1.66675 10C1.66675 10.3452 1.94657 10.625 2.29175 10.625C4.89196 10.625 6.62151 11.1989 7.71135 12.2888C8.8012 13.3786 9.37508 15.1081 9.37508 17.7084C9.37508 18.0535 9.6549 18.3334 10.0001 18.3334C10.3453 18.3334 10.6251 18.0535 10.6251 17.7084C10.6251 15.1081 11.199 13.3786 12.2888 12.2888C13.3787 11.1989 15.1082 10.625 17.7084 10.625C18.0536 10.625 18.3334 10.3452 18.3334 10C18.3334 9.65484 18.0536 9.37502 17.7084 9.37502C15.1082 9.37502 13.3787 8.80113 12.2888 7.71129C11.199 6.62145 10.6251 4.8919 10.6251 2.29169Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="10.0001"
          y1="1.66669"
          x2="10.0001"
          y2="18.3334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BFD1FA" />
          <stop offset="1" stopColor="#93B5FD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SparkleIcon;
