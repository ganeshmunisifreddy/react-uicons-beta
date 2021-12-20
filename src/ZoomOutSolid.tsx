import * as React from "react";

function ZoomOutSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="m23.707 22.293-5.966-5.965a10 10 0 1 0-1.414 1.414l5.966 5.965a1 1 0 0 0 1.414-1.414ZM13 11H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default ZoomOutSolid;
