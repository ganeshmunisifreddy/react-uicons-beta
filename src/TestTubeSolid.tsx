import * as React from "react";

function TestTubeSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M5 1a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2h-1v5H7V2H6a1 1 0 0 1-1-1zm2 8v10a5 5 0 0 0 10 0V9z" />
    </svg>
  );
}

export default TestTubeSolid;
