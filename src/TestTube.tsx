import * as React from "react";

function TestTube(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M18 0H6a1 1 0 0 0 0 2h1v17a5 5 0 0 0 10 0V2h1a1 1 0 0 0 0-2zm-6 22a3 3 0 0 1-3-3V9h6v10a3 3 0 0 1-3 3zm3-15H9V2h6z" />
    </svg>
  );
}

export default TestTube;
