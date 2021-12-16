import * as React from "react";

function RoadSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="m23.924 18.134-2.464-14A4.992 4.992 0 0 0 16.536 0H7.451a4.992 4.992 0 0 0-4.926 4.138l-2.449 14A5 5 0 0 0 5 24h14a5 5 0 0 0 4.925-5.866ZM13 20a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0-7a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0-7a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Z" />
    </svg>
  );
}

export default RoadSolid;
