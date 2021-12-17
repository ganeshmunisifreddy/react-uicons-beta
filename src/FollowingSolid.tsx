import * as React from "react";

function FollowingSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.047 512.047"
      style={{
        enableBackground: "new 0 0 512.047 512.047",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <circle cx={192} cy={128.024} r={128} />
      <path d="M192 298.69c-105.985.13-191.871 86.015-192 192 0 11.782 9.551 21.333 21.333 21.333h341.333c11.782 0 21.333-9.551 21.333-21.333-.128-105.985-86.014-191.87-191.999-192zM469.333 168.024c-24.717 1.231-43.79 22.211-42.667 46.933 1.123-24.722-17.949-45.702-42.667-46.933-24.717 1.231-43.79 22.211-42.667 46.933 0 36.907 48.128 80.149 72.107 99.392a21.162 21.162 0 0 0 26.453 0c23.979-19.2 72.107-62.485 72.107-99.392 1.124-24.723-17.948-45.702-42.666-46.933z" />
    </svg>
  );
}

export default FollowingSolid;
