import * as React from "react";

function ResizeSolid(props: any) {
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
      <path d="M11 18h2v1a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-3a5.006 5.006 0 0 1 5-5h1v2a5.006 5.006 0 0 0 5 5zm-3-5a3 3 0 0 0 3 3 3 3 0 0 0-3-3zM19 0h-8a5.006 5.006 0 0 0-5 5v6h2a4.969 4.969 0 0 1 2.753.833L16.586 6H14a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1-2 0V7.414l-5.833 5.833A4.969 4.969 0 0 1 13 16v2h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5z" />
    </svg>
  );
}

export default ResizeSolid;
