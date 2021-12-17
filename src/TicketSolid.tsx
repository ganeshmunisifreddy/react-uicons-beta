import * as React from "react";

function TicketSolid(props: any) {
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
      <path d="M6 24h2.13a2.02 2.02 0 0 0 1.941-1.532 2 2 0 0 1 3.858 0A2.02 2.02 0 0 0 15.87 24H18a3 3 0 0 0 3-3v-4h-4a1 1 0 0 1 0-2h4V5a5.006 5.006 0 0 0-5-5h-.13a2.02 2.02 0 0 0-1.941 1.532 2 2 0 0 1-3.858 0A2.02 2.02 0 0 0 8.13 0H8a5.006 5.006 0 0 0-5 5v10h4a1 1 0 0 1 0 2H3v4a3 3 0 0 0 3 3Zm5-9h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z" />
    </svg>
  );
}

export default TicketSolid;
