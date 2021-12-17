import * as React from "react";

function RoomService(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M23 19v-2A11.01 11.01 0 0 0 13 6.051V4.723a2 2 0 1 0-2 0v1.328A11.01 11.01 0 0 0 1 17v2a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM3 17c.473-11.934 17.531-11.925 18 0v2H3Z" />
    </svg>
  );
}

export default RoomService;
