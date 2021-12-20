import * as React from "react";

function SurfingSolid(props: any) {
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
      <path d="M20 .01c-3.812 0-8.125 2.038-11.539 5.451A38.467 38.467 0 0 0 .323 17.312a3.975 3.975 0 0 0 .708 4.243L15.293 7.293a1 1 0 1 1 1.414 1.414L2.449 22.965a3.941 3.941 0 0 0 4.236.713 38.333 38.333 0 0 0 11.854-8.139C21.952 12.126 23.99 7.813 23.99 4A3.632 3.632 0 0 0 20 .01z" />
    </svg>
  );
}

export default SurfingSolid;
