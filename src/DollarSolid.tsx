import * as React from "react";

function DollarSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M10.068 20A3.071 3.071 0 0 1 7 16.932a1 1 0 0 0-2 0v.123A5.073 5.073 0 0 0 10.068 22H11v1a1 1 0 0 0 2 0v-1h.932a5.068 5.068 0 0 0 1.6-9.875L13 11.28V4h.932A3.071 3.071 0 0 1 17 7.068a1 1 0 0 0 2 0v-.123A5.073 5.073 0 0 0 13.932 2H13V1a1 1 0 0 0-2 0v1h-.932a5.068 5.068 0 0 0-1.6 9.875L11 12.72V20ZM13 13.387l1.9.634A3.068 3.068 0 0 1 13.932 20H13ZM9.1 9.979A3.068 3.068 0 0 1 10.068 4H11v6.613Z" />
    </svg>
  );
}

export default DollarSolid;
