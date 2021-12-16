import * as React from "react";

function CaretLeft(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M13.29 18.59 7.71 13a1 1 0 0 1 0-1.41L13.29 6a1 1 0 0 1 1.71.71v11.17a1 1 0 0 1-1.71.71Z" />
    </svg>
  );
}

export default CaretLeft;
