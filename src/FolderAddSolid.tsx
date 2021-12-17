import * as React from "react";

function FolderAddSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M23.863 6.88 0 6.991V6a5.006 5.006 0 0 1 5-5h2.528a3.014 3.014 0 0 1 1.341.316L12.025 2.9a1.019 1.019 0 0 0 .447.1H19a5 5 0 0 1 4.863 3.88zm.137 2V18a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8.991zM16 16a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 1-1z" />
    </svg>
  );
}

export default FolderAddSolid;
