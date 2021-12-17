import * as React from "react";

function ToolMarquee(props: any) {
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
      <path d="M24 18v1a5.006 5.006 0 0 1-5 5h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0zM19 0h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5zm4 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zM6 22H5a3 3 0 0 1-3-3v-1a1 1 0 0 0-2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 0-2zM6 0H5a5.006 5.006 0 0 0-5 5v1a1 1 0 0 0 2 0V5a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2zM1 15a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zm9-13h3.932a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2zm4 20h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
    </svg>
  );
}

export default ToolMarquee;
