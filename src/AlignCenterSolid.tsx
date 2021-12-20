import * as React from "react";

function AlignCenterSolid(props: any) {
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
      <path d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM5 9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM19 19H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default AlignCenterSolid;
