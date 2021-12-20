import * as React from "react";

function UserAddSolid(props: any) {
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
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M490.667 234.667H448V192c0-11.782-9.551-21.333-21.333-21.333-11.782 0-21.333 9.551-21.333 21.333v42.667h-42.667c-11.782 0-21.333 9.551-21.333 21.333 0 11.782 9.551 21.333 21.333 21.333h42.667V320c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333v-42.667h42.667c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333z" />
      <circle cx={192} cy={128} r={128} />
      <path d="M192 298.667c-105.99.118-191.882 86.01-192 192C0 502.449 9.551 512 21.333 512h341.333c11.782 0 21.333-9.551 21.333-21.333-.117-105.99-86.009-191.883-191.999-192z" />
    </svg>
  );
}

export default UserAddSolid;
