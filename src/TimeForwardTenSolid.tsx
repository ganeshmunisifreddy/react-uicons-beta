import * as React from "react";

function TimeForwardTenSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M21 15a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3zm1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zM13 12V7a1 1 0 0 0-2 0v4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z" />
      <path d="M23 2a1 1 0 0 0-1 1v2.374A12 12 0 1 0 7.636 23.182 1.015 1.015 0 0 0 8 23.25a1 1 0 0 0 .364-1.932A10 10 0 1 1 20.636 7H18a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z" />
      <path d="M15.383 15.076a1 1 0 0 0-1.09.217l-3 3a1 1 0 0 0 1.414 1.414L14 18.414V23a1 1 0 0 0 2 0v-7a1 1 0 0 0-.617-.924z" />
    </svg>
  );
}

export default TimeForwardTenSolid;
