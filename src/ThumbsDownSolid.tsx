import * as React from "react";

function ThumbsDownSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="m23.951 12.3-.705-5A5.024 5.024 0 0 0 18.3 3H8v15.584l1.626 3.3a3.038 3.038 0 0 0 5.721-1.838L15.011 18H19a5 5 0 0 0 4.951-5.7ZM0 8v5a5.006 5.006 0 0 0 5 5h1V3H5a5.006 5.006 0 0 0-5 5Z" />
    </svg>
  );
}

export default ThumbsDownSolid;
