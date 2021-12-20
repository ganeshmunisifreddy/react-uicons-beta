import * as React from "react";

function ArrowSmallRightSolid(props: any) {
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
      <path d="m17.061 9.525-3.586-3.586a1.5 1.5 0 0 0-2.121 2.122l2.439 2.439H5a1.5 1.5 0 0 0 0 3h8.793l-2.439 2.439a1.5 1.5 0 0 0 2.121 2.122l3.586-3.586a3.505 3.505 0 0 0 0-4.95Z" />
    </svg>
  );
}

export default ArrowSmallRightSolid;
