import * as React from "react";

function CaretLeftSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M13.293 18.586 7.707 13a1 1 0 0 1 0-1.414L13.293 6A1 1 0 0 1 15 6.707v11.172a1 1 0 0 1-1.707.707Z" />
    </svg>
  );
}

export default CaretLeftSolid;
