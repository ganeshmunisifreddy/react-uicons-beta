import * as React from "react";

function GlobeAltSolid(props: any) {
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
      <path d="M5 8a8 8 0 1 1 8 8 8.009 8.009 0 0 1-8-8zm17.646 5.383a1 1 0 0 0-1.39.26A10 10 0 1 1 5.285 1.637 1 1 0 0 0 3.743.363 11.994 11.994 0 0 0 12 19.949V22H8a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2.061a11.992 11.992 0 0 0 8.907-5.166 1 1 0 0 0-.261-1.39z" />
    </svg>
  );
}

export default GlobeAltSolid;
