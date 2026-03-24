import { useId } from "react";

/** Base coordinate system for paths, filters, and clips. */
const VIEWBOX_W = 164;
const VIEWBOX_H = 154;

/**
 * Expands the visible viewBox around the art so the logo sits smaller in the frame
 * (same as “zoom out” at a fixed width/height). 1 = tight; ~1.2 ≈ Figma-style breathing room.
 */
const VIEWBOX_ZOOM_OUT = 1.22;
const vbW = (VIEWBOX_W / 2) * VIEWBOX_ZOOM_OUT;
const vbH = (VIEWBOX_H / 2) * VIEWBOX_ZOOM_OUT;
const vbX = (VIEWBOX_W - vbW) / 2;
const vbY = (VIEWBOX_H - vbH) / 2;

const DEFAULT_HEIGHT = 44;
const DEFAULT_WIDTH = DEFAULT_HEIGHT * (VIEWBOX_W / VIEWBOX_H);

type SolLogoProps = {
  /** Outer width in CSS pixels. */
  width?: number;
  /** Outer height in CSS pixels. */
  height?: number;
  className?: string;
  "aria-label"?: string;
};

export function SolIcon({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className = "",
  "aria-label": ariaLabel = "Sol",
}: SolLogoProps) {
  const uid = useId().replace(/:/g, "");
  const widthPx = width;
  const heightPx = height;
  const filterDrop = `sol-logo-f0-${uid}`;
  const clip = `sol-logo-clip-${uid}`;
  const filterInner = `sol-logo-f1-${uid}`;
  const paint = `sol-logo-paint-${uid}`;

  return (
    <svg
      className={`shrink-0 ${className}`.trim()}
      width={widthPx}
      height={heightPx}
      viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter={`url(#${filterDrop})`}>
        <g clipPath={`url(#${clip})`}>
          <g filter={`url(#${filterInner})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.0255 86.683C81.1019 86.6917 83.2442 87.1244 84.8683 88.0434C85.4856 88.3927 85.7035 89.1759 85.3517 89.7924C85.0004 90.4078 84.216 90.6216 83.5997 90.2729C82.47 89.6336 80.7975 89.2549 79.0148 89.2475C77.2904 89.2404 75.6236 89.5812 74.4122 90.2162L74.296 90.2787C73.6765 90.6216 72.8944 90.4004 72.549 89.7817C72.2031 89.1619 72.4278 88.3811 73.048 88.0375L73.2101 87.9496C74.8965 87.064 77.0112 86.6747 79.0255 86.683ZM78.3937 80.934C83.7864 80.9242 89.2807 82.7234 94.5939 86.2748C95.1651 86.6568 95.3314 87.4172 94.9806 87.9994L94.9445 88.0551C94.5485 88.6425 93.751 88.798 93.1622 88.4047C88.198 85.0865 83.1948 83.4887 78.3976 83.4975C73.6068 83.5064 68.9314 85.118 64.6056 88.3647C64.0392 88.7897 63.2334 88.6767 62.8058 88.1118C62.3777 87.5458 62.4916 86.7417 63.0587 86.3159L63.2804 86.1508C67.9483 82.7115 73.0789 80.9438 78.3937 80.934ZM78.7658 45.0004C83.5831 44.9739 88.326 46.1886 92.5324 48.5258C96.7388 50.8632 100.267 54.2444 102.772 58.3403C105.276 62.4362 106.673 67.1082 106.826 71.9008C106.908 74.4579 106.634 77.0034 106.021 79.4662C105.482 81.628 103.94 83.0795 102.092 83.7358C100.266 84.384 98.1308 84.2685 96.2511 83.3666C93.5015 82.0473 90.1137 80.5237 86.8917 79.3442C83.6159 78.145 80.6943 77.3724 78.8019 77.4145C76.9319 77.4561 74.0621 78.2872 70.8576 79.519C67.7023 80.7318 64.3846 82.2672 61.6857 83.5922C59.855 84.4909 57.7087 84.636 55.8693 84.0131C54.0204 83.387 52.4771 81.9811 51.9044 79.7973C51.2578 77.3309 50.9525 74.777 51.006 72.2075C51.1059 67.4136 52.4513 62.7271 54.9103 58.6039C57.3694 54.4808 60.859 51.0607 65.0392 48.6772C69.2193 46.2937 73.9484 45.027 78.7658 45.0004ZM78.7804 47.5649C74.4055 47.5889 70.1111 48.7386 66.3156 50.9028C62.5201 53.0669 59.3523 56.172 57.1202 59.9145C54.8883 63.657 53.6679 67.9107 53.5773 72.2612C53.5288 74.5929 53.8059 76.9106 54.3927 79.1489C54.8209 80.7812 56.3202 81.7936 58.0919 81.8422C57.0717 79.2896 56.5109 76.5049 56.5109 73.5912C56.5111 61.2634 66.5456 51.2721 78.9201 51.2719C91.2947 51.2719 101.33 61.2633 101.33 73.5912C101.33 76.4049 100.806 79.0984 99.8517 81.5785C100.335 81.5601 100.802 81.4727 101.23 81.3207C102.36 80.9195 103.218 80.084 103.526 78.8481C104.082 76.6128 104.33 74.3025 104.256 71.9819C104.117 67.6327 102.85 63.3929 100.576 59.6752C98.3028 55.9576 95.1006 52.8883 91.2814 50.766C87.4621 48.6437 83.1553 47.5408 78.7804 47.5649ZM78.9201 53.8364C67.9625 53.8366 59.0824 62.6825 59.0822 73.5912C59.0822 76.3087 59.6338 78.8978 60.63 81.2534C61.6033 80.7762 62.6587 80.271 63.7599 79.7621C62.978 77.8583 62.546 75.7742 62.546 73.5912C62.5463 64.583 69.8788 57.2829 78.9201 57.2827C87.9615 57.2827 95.2938 64.5829 95.2941 73.5912C95.2941 75.6994 94.8922 77.7154 94.1603 79.5659C95.2674 80.0638 96.3276 80.5584 97.3048 81.0268C98.2417 78.7321 98.7589 76.2221 98.7589 73.5912C98.7587 62.6824 89.8778 53.8364 78.9201 53.8364ZM78.9201 59.8471C71.2958 59.8473 65.1176 66.0021 65.1173 73.5912C65.1173 75.3994 65.4689 77.126 66.1056 78.7065C67.0809 78.2799 68.0721 77.8618 69.0577 77.4692C68.5814 76.2684 68.3195 74.9597 68.3195 73.5912C68.3197 67.7583 73.0671 63.0329 78.9201 63.0326C84.7732 63.0327 89.5214 67.7581 89.5216 73.5912C89.5216 74.9083 89.2789 76.17 88.8361 77.3334C89.8279 77.7139 90.8239 78.1195 91.8029 78.5346C92.3968 77.001 92.7228 75.3343 92.7228 73.5912C92.7225 66.002 86.5445 59.8471 78.9201 59.8471ZM78.9201 65.5961C74.4841 65.5963 70.891 69.1774 70.8908 73.5912C70.8908 74.6406 71.0934 75.6427 71.462 76.56C74.1432 75.6051 76.7539 74.8954 78.7443 74.851C80.8387 74.8045 83.6024 75.4981 86.4191 76.4565C86.762 75.5675 86.9503 74.6014 86.9503 73.5912C86.9501 69.1773 83.3562 65.5961 78.9201 65.5961Z"
              fill={`url(#${paint})`}
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={filterDrop}
          x="-12.0797"
          y="-17.28"
          width="188"
          height="188"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="9" />
          <feGaussianBlur stdDeviation="27" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_471"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_471"
            result="shape"
          />
        </filter>
        <filter
          id={filterInner}
          x="51"
          y="41.4448"
          width="55.8403"
          height="50.6306"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.6352" />
          <feGaussianBlur stdDeviation="1.0576" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_471"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-3.5552" />
          <feGaussianBlur stdDeviation="2.56" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
          />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_471"
            result="effect2_innerShadow_1_471"
          />
        </filter>
        <linearGradient
          id={paint}
          x1="77.4001"
          y1="43.9549"
          x2="73.6529"
          y2="92.1487"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD5832" />
          <stop offset="1" stopColor="#D62800" />
        </linearGradient>
        <clipPath id={clip}>
          <path
            d="M38.9203 35.72C38.9203 31.3018 42.502 27.72 46.9203 27.72H110.92C115.339 27.72 118.92 31.3018 118.92 35.72V99.72C118.92 104.138 115.339 107.72 110.92 107.72H46.9203C42.502 107.72 38.9203 104.138 38.9203 99.72V35.72Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
