import * as React from "react";

function BoxSolid(props: any) {
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
      <path d="M19 0H5a5 5 0 0 0-5 5 3 3 0 0 0 3 3h18a2.97 2.97 0 0 0 3-2.777A5.005 5.005 0 0 0 19 0ZM22 10H2a1 1 0 0 0-1 1v8a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5v-8a1 1 0 0 0-1-1Zm-7 5H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default BoxSolid;
