import * as React from "react";

function MinusSmallSolid(props: any) {
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
      <path d="M7 11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default MinusSmallSolid;
