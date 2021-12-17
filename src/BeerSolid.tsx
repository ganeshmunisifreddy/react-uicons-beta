import * as React from "react";

function BeerSolid(props: any) {
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
      <path d="M4 6H2a4 4 0 0 1 3.765-3.993 4.509 4.509 0 0 1 7.32-.211.593.593 0 0 0 .54.223 4.093 4.093 0 0 1 2.359.5A3.9 3.9 0 0 1 18 6h-6a3 3 0 0 0-3 3v4a1 1 0 0 1-2 0V9a3 3 0 0 0-3-3Zm19 7.5v3a3.5 3.5 0 0 1-3.5 3.5h-.6a5.009 5.009 0 0 1-4.9 4H6a5.006 5.006 0 0 1-5-5V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a3 3 0 0 0 6 0V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h.5a3.5 3.5 0 0 1 3.5 3.5Zm-2 0a1.5 1.5 0 0 0-1.5-1.5H19v6h.5a1.5 1.5 0 0 0 1.5-1.5Z" />
    </svg>
  );
}

export default BeerSolid;
