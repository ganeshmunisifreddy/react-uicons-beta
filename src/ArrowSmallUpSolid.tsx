import * as React from "react";

function ArrowSmallUpSolid(props: any) {
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
      <path d="m18.061 9.525-3.586-3.586a3.585 3.585 0 0 0-4.95 0L5.939 9.525a1.5 1.5 0 0 0 2.122 2.121L10.5 9.207V19a1.5 1.5 0 0 0 3 0V9.207l2.439 2.439a1.5 1.5 0 0 0 2.122-2.121Z" />
    </svg>
  );
}

export default ArrowSmallUpSolid;
