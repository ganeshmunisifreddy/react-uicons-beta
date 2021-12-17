import * as React from "react";

function ToolCropSolid(props: any) {
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
      <path d="M23 18h-3V9a5.006 5.006 0 0 0-5-5H6V1a1 1 0 0 0-2 0v3H1a1 1 0 0 0 0 2h3v9a5.006 5.006 0 0 0 5 5h9v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2Zm-5 0H9a3 3 0 0 1-3-3V6h9a3 3 0 0 1 3 3Z" />
    </svg>
  );
}

export default ToolCropSolid;
