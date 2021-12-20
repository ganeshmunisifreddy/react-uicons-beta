import * as React from "react";

function FrownSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM6 10a2 2 0 0 1 4 0c0 1-.895 1-2 1s-2 0-2-1Zm10.01 8H8a1 1 0 0 1-.963-1.285A5.5 5.5 0 0 1 12.007 13a5.469 5.469 0 0 1 4.966 3.715A1.02 1.02 0 0 1 16.01 18ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" />
    </svg>
  );
}

export default FrownSolid;
