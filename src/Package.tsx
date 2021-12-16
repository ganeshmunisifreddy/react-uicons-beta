import * as React from "react";

function Package(props: any) {
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
      <path d="M21 8h-4a3 3 0 0 0-3 3v5h-2v-4a6 6 0 0 0-3.107-5.253 4 4 0 1 0-5.786 0A6 6 0 0 0 0 12v11a1 1 0 0 0 2 0v-5h20v5a1 1 0 0 0 2 0V11a3 3 0 0 0-3-3zM4 4a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm2 4a4 4 0 0 1 4 4v4H2v-4a4 4 0 0 1 4-4zm10 8v-5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v5z" />
    </svg>
  );
}

export default Package;
