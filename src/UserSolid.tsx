import * as React from "react";

function UserSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <circle cx={256} cy={128} r={128} />
      <path d="M256 298.667c-105.99.118-191.882 86.01-192 192C64 502.449 73.551 512 85.333 512h341.333c11.782 0 21.333-9.551 21.333-21.333-.117-105.99-86.009-191.883-191.999-192z" />
    </svg>
  );
}

export default UserSolid;
