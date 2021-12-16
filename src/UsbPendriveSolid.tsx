import * as React from "react";

function UsbPendriveSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M21 14a5.006 5.006 0 0 0-5-5H8a5.006 5.006 0 0 0-5 5v1a9 9 0 0 0 18 0ZM15 0H9a4 4 0 0 0-4 4v3.685A6.952 6.952 0 0 1 8 7h8a6.952 6.952 0 0 1 3 .685V4a4 4 0 0 0-4-4Zm-5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
    </svg>
  );
}

export default UsbPendriveSolid;
