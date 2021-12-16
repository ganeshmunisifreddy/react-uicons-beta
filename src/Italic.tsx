import * as React from "react";

function Italic(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M20 0H7a1 1 0 0 0 0 2h5.354L9.627 22H4a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2h-5.354l2.727-20H20a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default Italic;