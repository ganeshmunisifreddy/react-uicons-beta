import * as React from "react";

function ToolMarqueeSolid(props: any) {
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
      <path d="M19 24h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0v1a5.006 5.006 0 0 1-5 5zm5-18V5a5.006 5.006 0 0 0-5-5h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0zm0 8v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zM7 23a1 1 0 0 0-1-1H5a3 3 0 0 1-3-3v-1a1 1 0 0 0-2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 1-1zM2 6V5a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v1a1 1 0 0 0 2 0zm0 8v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zM14.932 1a1 1 0 0 0-1-1H10a1 1 0 0 0 0 2h3.932a1 1 0 0 0 1-1zM15 23a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1zm5-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" />
    </svg>
  );
}

export default ToolMarqueeSolid;
