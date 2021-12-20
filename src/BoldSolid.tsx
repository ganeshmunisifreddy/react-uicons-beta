import * as React from "react";

function BoldSolid(props: any) {
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
      <path d="M22 17a7 7 0 0 0-4.046-6.337A6.986 6.986 0 0 0 12 0H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10a7.008 7.008 0 0 0 7-7ZM7 4h5a3 3 0 0 1 0 6H7Zm8 16H7v-6h8a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

export default BoldSolid;
