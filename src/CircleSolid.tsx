import * as React from "react";

function CircleSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9Z" />
    </svg>
  );
}

export default CircleSolid;
