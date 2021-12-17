import * as React from "react";

function VenusMarsSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M10 19H8v-2.317a8.961 8.961 0 0 1 .214-13.566A7.014 7.014 0 0 0 7 3a7 7 0 0 0-1 13.92V19H4a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
      <path d="M22 0h-4a1 1 0 0 0 0 2h2.586l-2.4 2.4A7.028 7.028 0 1 0 19.6 5.816l2.4-2.4V6a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2Z" />
    </svg>
  );
}

export default VenusMarsSolid;
