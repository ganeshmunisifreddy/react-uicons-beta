import * as React from "react";

function AngleDoubleSmallLeftSolid(props: any) {
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
      <path d="M10.482 19.5a1.5 1.5 0 0 1-1.06-.439l-4.586-4.586a3.505 3.505 0 0 1 0-4.95l4.586-4.586a1.5 1.5 0 0 1 2.121 2.122l-4.586 4.585a.5.5 0 0 0 0 .708l4.586 4.585a1.5 1.5 0 0 1-1.061 2.561Z" />
      <path d="M17.482 19.5a1.5 1.5 0 0 1-1.06-.439l-6-6a1.5 1.5 0 0 1 0-2.122l6-6a1.5 1.5 0 1 1 2.121 2.122L13.6 12l4.939 4.939a1.5 1.5 0 0 1-1.057 2.561Z" />
    </svg>
  );
}

export default AngleDoubleSmallLeftSolid;
