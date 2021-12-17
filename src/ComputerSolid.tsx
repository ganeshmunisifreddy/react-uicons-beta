import * as React from "react";

function ComputerSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M5 19h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.009 5.009 0 0 0 4.9-4H.1A5.009 5.009 0 0 0 5 19ZM19 1H5a5.006 5.006 0 0 0-5 5v7h24V6a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  );
}

export default ComputerSolid;
