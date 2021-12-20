import * as React from "react";

function LockAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M13 10a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm11 2A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12zm-9-2a3 3 0 1 0-4 2.816V16a1 1 0 0 0 2 0v-3.184A3 3 0 0 0 15 10z" />
    </svg>
  );
}

export default LockAltSolid;
