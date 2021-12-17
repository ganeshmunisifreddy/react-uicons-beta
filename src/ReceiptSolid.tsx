import * as React from "react";

function ReceiptSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M8 0a5.006 5.006 0 0 0-5 5v18a1 1 0 0 0 1.564.825l2.106-1.439 2.106 1.439a1 1 0 0 0 1.13 0l2.1-1.439 2.1 1.439a1 1 0 0 0 1.131 0l2.1-1.438 2.1 1.437A1 1 0 0 0 21 23V5a5.006 5.006 0 0 0-5-5Zm6 14H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm3-5a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Z" />
    </svg>
  );
}

export default ReceiptSolid;
