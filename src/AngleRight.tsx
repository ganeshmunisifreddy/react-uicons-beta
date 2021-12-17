import * as React from "react";

function AngleRight(props: any) {
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
      <path d="M7 24a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8.17-8.17a3 3 0 0 0 0-4.24L6.29 1.71A1 1 0 0 1 7.71.29l8.17 8.17a5 5 0 0 1 0 7.08l-8.17 8.17A1 1 0 0 1 7 24Z" />
    </svg>
  );
}

export default AngleRight;
