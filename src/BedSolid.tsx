import * as React from "react";

function BedSolid(props: any) {
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
      <path d="M9 9.5A2.5 2.5 0 1 1 6.5 7 2.5 2.5 0 0 1 9 9.5ZM24 12v-2a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v2ZM2 14V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h20v2a1 1 0 0 0 2 0v-7Z" />
    </svg>
  );
}

export default BedSolid;
