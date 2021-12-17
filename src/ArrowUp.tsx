import * as React from "react";

function ArrowUp(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M6 6.21a1 1 0 0 0 1.41 0L11 2.58V23a1 1 0 0 0 1 1 1 1 0 0 0 1-1V2.59l3.62 3.62a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41L14.13.88a3 3 0 0 0-4.24 0L6 4.8a1 1 0 0 0 0 1.41Z" />
    </svg>
  );
}

export default ArrowUp;
