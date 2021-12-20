import * as React from "react";

function LuggageRollingSolid(props: any) {
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
      <path d="M19 8h-2V5A5 5 0 0 0 7 5v3H5a5.006 5.006 0 0 0-5 5v4a5 5 0 0 0 3 4.576V23a1 1 0 0 0 2 0v-1h14v1a1 1 0 0 0 2 0v-1.424A5 5 0 0 0 24 17v-4a5.006 5.006 0 0 0-5-5ZM9 5a3 3 0 0 1 6 0v3H9Zm7 8H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default LuggageRollingSolid;
