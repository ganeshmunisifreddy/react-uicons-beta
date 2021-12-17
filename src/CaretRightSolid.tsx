import * as React from "react";

function CaretRightSolid(props: any) {
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
      <path d="M9 17.879V6.707A1 1 0 0 1 10.707 6l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586A1 1 0 0 1 9 17.879Z" />
    </svg>
  );
}

export default CaretRightSolid;
