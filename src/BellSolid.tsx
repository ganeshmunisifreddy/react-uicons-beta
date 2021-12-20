import * as React from "react";

function BellSolid(props: any) {
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
      <path d="M7.424 21a4.99 4.99 0 0 0 9.152 0ZM22.392 12.549l-1.736-5.723A9.321 9.321 0 0 0 2.58 7.28l-1.348 5.537A5 5 0 0 0 6.09 19h11.517a5 5 0 0 0 4.785-6.451Z" />
    </svg>
  );
}

export default BellSolid;
