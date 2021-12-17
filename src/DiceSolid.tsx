import * as React from "react";

function DiceSolid(props: any) {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zM7 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM7 8a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
    </svg>
  );
}

export default DiceSolid;
