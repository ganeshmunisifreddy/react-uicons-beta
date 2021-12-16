import * as React from "react";

function BrushSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M24 10H0V5a5.006 5.006 0 0 1 5-5h5v3a1 1 0 0 0 2 0V0h2v5a1 1 0 0 0 2 0V0h2v7a1 1 0 0 0 2 0V.1A5.009 5.009 0 0 1 24 5zM.3 12A7.011 7.011 0 0 0 7 17h2v4a3 3 0 0 0 6 0v-4h2a7.011 7.011 0 0 0 6.7-5z" />
    </svg>
  );
}

export default BrushSolid;
