import * as React from "react";

function StarOctogramSolid(props: any) {
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
      <path d="M21.77 8.948a1.238 1.238 0 0 1-.7-1.7 3.239 3.239 0 0 0-4.315-4.316 1.239 1.239 0 0 1-1.7-.7 3.239 3.239 0 0 0-6.1 0 1.238 1.238 0 0 1-1.7.7 3.239 3.239 0 0 0-4.321 4.317 1.237 1.237 0 0 1-.7 1.7 3.24 3.24 0 0 0 0 6.1 1.238 1.238 0 0 1 .705 1.7 3.238 3.238 0 0 0 4.311 4.317 1.238 1.238 0 0 1 1.7.7 3.239 3.239 0 0 0 6.1 0 1.238 1.238 0 0 1 1.7-.7 3.239 3.239 0 0 0 4.316-4.315 1.239 1.239 0 0 1 .7-1.7 3.239 3.239 0 0 0 0-6.1Z" />
    </svg>
  );
}

export default StarOctogramSolid;
