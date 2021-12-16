import * as React from "react";

function BoxAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M10 6V0h4v6a2 2 0 0 1-4 0zm6-1h8a5.006 5.006 0 0 0-5-5h-3zM8 0H5a5.006 5.006 0 0 0-5 5h8zm16 7v12a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V7h8.142a3.981 3.981 0 0 0 7.716 0zm-4 12a1 1 0 0 0-1-1h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1z" />
    </svg>
  );
}

export default BoxAltSolid;
