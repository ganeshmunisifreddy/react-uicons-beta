import * as React from "react";

function VenusSolid(props: any) {
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
      <path d="M20 8a8 8 0 1 0-9 7.931V19H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-3.069A8.008 8.008 0 0 0 20 8Z" />
    </svg>
  );
}

export default VenusSolid;
