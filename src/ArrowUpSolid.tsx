import * as React from "react";

function ArrowUpSolid(props: any) {
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
      <path d="M18.427 4.911 14.508.992a3.583 3.583 0 0 0-4.95 0L5.639 4.911A1.5 1.5 0 0 0 7.76 7.032l2.78-2.78.023 18.25a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5L13.54 4.266l2.766 2.766a1.5 1.5 0 1 0 2.121-2.121Z" />
    </svg>
  );
}

export default ArrowUpSolid;
