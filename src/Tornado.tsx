import * as React from "react";

function Tornado(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 24h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2h-4a3 3 0 0 1 0-6h7a1 1 0 0 0 0-2H6C-1.932 11.747-1.926.25 6 0h14a4 4 0 0 1 0 8H6a1 1 0 0 1 0-2h14a2 2 0 0 0 0-4H6a4 4 0 0 0 0 8h13a3 3 0 0 1 0 6h-7a1 1 0 0 0 0 2h4a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

export default Tornado;
