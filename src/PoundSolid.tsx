import * as React from "react";

function PoundSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M21 22H6.884A6.934 6.934 0 0 0 8 18v-4h7a1 1 0 0 0 0-2H8V8a6 6 0 0 1 12 0 1 1 0 0 0 2 0A8 8 0 0 0 6 8v4H4a1 1 0 0 0 0 2h2v4c0 1.2-.292 4-3 4a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z" />
    </svg>
  );
}

export default PoundSolid;
