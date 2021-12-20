import * as React from "react";

function RoomServiceSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M24 22a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM2 19h20a1 1 0 0 0 1-1v-1A11.01 11.01 0 0 0 13 6.051V4.723a2 2 0 1 0-2 0v1.328A11.01 11.01 0 0 0 1 17v1a1 1 0 0 0 1 1Z" />
    </svg>
  );
}

export default RoomServiceSolid;
