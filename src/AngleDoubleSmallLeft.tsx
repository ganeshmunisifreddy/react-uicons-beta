import * as React from "react";

function AngleDoubleSmallLeft(props: any) {
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
      <path d="M10.48 19a1 1 0 0 1-.7-.29l-4.59-4.59a3 3 0 0 1 0-4.24l4.59-4.59a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L6.6 11.29a1 1 0 0 0 0 1.42l4.59 4.58a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" />
      <path d="M17.48 19a1 1 0 0 1-.7-.29l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L12.9 12l5.29 5.29a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" />
    </svg>
  );
}

export default AngleDoubleSmallLeft;
