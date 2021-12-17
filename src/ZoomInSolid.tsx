import * as React from "react";

function ZoomInSolid(props: any) {
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
      <path d="M10 20a9.959 9.959 0 0 0 6.327-2.258l5.966 5.965a1 1 0 0 0 1.414-1.414l-5.966-5.965A10 10 0 1 0 10 20ZM7 9h2V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H7a1 1 0 0 1 0-2Z" />
    </svg>
  );
}

export default ZoomInSolid;
