import * as React from "react";

function RedoSolid(props: any) {
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
      <path d="M17.244 4a2 2 0 0 0-3.414 1.414V7H9a9.01 9.01 0 0 0-9 9v7a1 1 0 0 0 2 0 6.006 6.006 0 0 1 6-6h5.83v1.586A2 2 0 0 0 17.244 20l5.879-5.879a3 3 0 0 0 0-4.242Z" />
    </svg>
  );
}

export default RedoSolid;
