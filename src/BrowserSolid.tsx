import * as React from "react";

function BrowserSolid(props: any) {
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
      <path d="M0 9v9a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9zm14 10H6a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm4-4H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm6-8V6a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v1zM10 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM7 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM4 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  );
}

export default BrowserSolid;
