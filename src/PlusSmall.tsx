import * as React from "react";

function PlusSmall(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" />
    </svg>
  );
}

export default PlusSmall;
