import * as React from "react";

function CaretUp(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6.41 16h11.18a1 1 0 0 0 .7-1.71l-5.58-5.58a1 1 0 0 0-1.42 0l-5.58 5.58a1 1 0 0 0 .7 1.71Z" />
    </svg>
  );
}

export default CaretUp;
