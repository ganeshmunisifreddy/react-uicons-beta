import * as React from "react";

function VenusDouble(props: any) {
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
      <path d="M24 7.5a7.486 7.486 0 0 0-11.995-5.99A7.5 7.5 0 1 0 6 14.849V19H4a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2H8v-4.024a7.442 7.442 0 0 0 4.005-1.486A7.456 7.456 0 0 0 16 14.975V19h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-4.151A7.513 7.513 0 0 0 24 7.5Zm-2 0A5.5 5.5 0 1 1 16.5 2 5.506 5.506 0 0 1 22 7.5Zm-20 0a5.49 5.49 0 0 1 8.56-4.561 7.448 7.448 0 0 0 0 9.122A5.49 5.49 0 0 1 2 7.5Z" />
    </svg>
  );
}

export default VenusDouble;
