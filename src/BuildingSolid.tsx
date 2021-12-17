import * as React from "react";

function BuildingSolid(props: any) {
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
      <path d="M9 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h9V5a5 5 0 0 0-5-5zM5 19H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm5 12H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm9-2h-3v19h3a5.006 5.006 0 0 0 5-5v-9a5.006 5.006 0 0 0-5-5zm1 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
    </svg>
  );
}

export default BuildingSolid;
