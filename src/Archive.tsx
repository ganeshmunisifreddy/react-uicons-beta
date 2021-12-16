import * as React from "react";

function Archive(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM7 2h10a3 3 0 0 1 3 3v6H4V5a3 3 0 0 1 3-3Zm10 20H7a3 3 0 0 1-3-3v-6h16v6a3 3 0 0 1-3 3Z" />
      <path d="M11 7h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2ZM13 17h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default Archive;