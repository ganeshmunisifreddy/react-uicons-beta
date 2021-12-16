import * as React from "react";

function MouseSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M13 3V1a1 1 0 0 0-2 0v2a7.008 7.008 0 0 0-7 7v6a8 8 0 0 0 16 0v-6a7.008 7.008 0 0 0-7-7Zm0 7a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Z" />
    </svg>
  );
}

export default MouseSolid;
