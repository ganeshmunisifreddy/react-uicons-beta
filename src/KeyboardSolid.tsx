import * as React from "react";

function KeyboardSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M19 6h-6V3a1 1 0 0 0-2 0v3H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5Zm-9 4h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2Zm-5 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1-4H5a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm9 4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default KeyboardSolid;
