import * as React from "react";

function BandAidSolid(props: any) {
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
      <path d="M5 19a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5zM7 5h10v14H7zm4 9a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm2-4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm0 4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm-4-4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10-5v14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5z" />
    </svg>
  );
}

export default BandAidSolid;
