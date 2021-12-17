import * as React from "react";

function BoxAlt(props: any) {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 5h-7V2h4a3 3 0 0 1 3 3zM11 2h2v5a1 1 0 0 1-2 0zM5 2h4v3H2a3 3 0 0 1 3-3zm14 20H5a3 3 0 0 1-3-3V7h7a3 3 0 0 0 6 0h7v12a3 3 0 0 1-3 3zm1-3a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z" />
    </svg>
  );
}

export default BoxAlt;
