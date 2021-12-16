import * as React from "react";

function CaretDown(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6.41 9h11.18a1 1 0 0 1 .7 1.71l-5.58 5.58a1 1 0 0 1-1.42 0l-5.58-5.58A1 1 0 0 1 6.41 9Z" />
    </svg>
  );
}

export default CaretDown;
