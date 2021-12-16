import * as React from "react";

function YenSolid(props: any) {
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
      <path d="M22.792 1.61 13.262 14H18a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v3a1 1 0 0 1-2 0v-3H6a1 1 0 0 1 0-2h5v-2H6a1 1 0 0 1 0-2h4.738L1.208 1.61A1 1 0 0 1 2.792.39L12 12.36 21.208.39a1 1 0 1 1 1.584 1.22z" />
    </svg>
  );
}

export default YenSolid;
