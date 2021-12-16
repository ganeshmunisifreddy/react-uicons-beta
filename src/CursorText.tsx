import * as React from "react";

function CursorText(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M18 22h-2a3 3 0 0 1-3-3v-3h3a1 1 0 0 0 0-2h-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2h-2a4.982 4.982 0 0 0-4 2.031A4.982 4.982 0 0 0 8 0H6a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v9H8a1 1 0 0 0 0 2h3v3a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h2a4.982 4.982 0 0 0 4-2.031A4.982 4.982 0 0 0 16 24h2a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default CursorText;