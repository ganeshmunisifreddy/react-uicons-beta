import * as React from "react";

function MobileSolid(props: any) {
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
      <path d="M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zM9 8a3 3 0 0 1 6 0v4a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0zm3 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-5H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-4-8V8a1 1 0 0 1 2 0v1z" />
    </svg>
  );
}

export default MobileSolid;
