import * as React from "react";

function CloudUploadSolid(props: any) {
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
      <path d="M18.385 7.373a1.128 1.128 0 0 1-.751-.748 8 8 0 1 0-15.1 5.237 1.046 1.046 0 0 1-.311 1.238 5.5 5.5 0 0 0-2.166 5.2A5.622 5.622 0 0 0 5.683 23H14v-7.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l1.586-1.586a3 3 0 0 1 4.242 0l1.586 1.586a1 1 0 1 1-1.414 1.414L16 15.414v7.573a8.181 8.181 0 0 0 7.971-7.309 7.964 7.964 0 0 0-5.586-8.305Z" />
    </svg>
  );
}

export default CloudUploadSolid;
