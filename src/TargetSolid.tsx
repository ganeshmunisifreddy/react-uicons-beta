import * as React from "react";

function TargetSolid(props: any) {
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
      <path d="M21 13a1 1 0 0 1 0-2h2.949A12.006 12.006 0 0 0 13 .051v2.988a1 1 0 0 1-2 0V.051A12.006 12.006 0 0 0 .051 11H3a1 1 0 0 1 0 2H.051A12.006 12.006 0 0 0 11 23.949V21a1 1 0 0 1 2 0v2.949A12.006 12.006 0 0 0 23.949 13zm-6 0h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default TargetSolid;
