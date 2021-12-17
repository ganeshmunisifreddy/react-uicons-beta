import * as React from "react";

function TimeTwentyFourSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M14.6 21.3c-.3.226-.619.464-.89.7H16a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-1.5 1.275-2.456 2.4-3.3.75-.562 1.6-1.2 1.6-1.7a1 1 0 0 0-2 0 1 1 0 0 1-2 0 3 3 0 0 1 6 0c0 1.5-1.275 2.456-2.4 3.3zM23 15a1 1 0 0 0-1 1v3h-1a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h1v2a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1zm-10-3V7a1 1 0 0 0-2 0v4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1zM23 2a1 1 0 0 0-1 1v2.374A12 12 0 1 0 7.636 23.182 1.015 1.015 0 0 0 8 23.25a1 1 0 0 0 .364-1.932A10 10 0 1 1 20.636 7H18a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z" />
    </svg>
  );
}

export default TimeTwentyFourSolid;
