import * as React from "react";

function NotebookSolid(props: any) {
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
      <path d="M19 3.022V1a1 1 0 0 0-2 0v1.1a5 5 0 0 0-1-.1h-1V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H8a5 5 0 0 0-1 .1V1a1 1 0 0 0-2 0v2.022A4.979 4.979 0 0 0 3 7v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7a4.979 4.979 0 0 0-2-3.978zM12 17H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm4-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default NotebookSolid;
