import { FC } from "react";

export const Logo = ({ ...props }) => {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx="32" cy="32" r="30" fill={"currentColor"}></circle>
      <path
        d="M28.6 17.5h6.9l10.3 29h-6.6l-1.9-6H26.6l-2 6h-6.3l10.3-29m-.4 18h7.4L32 24.1l-3.8 11.4"
        fill={""}
      ></path>
    </svg>
  );
};
