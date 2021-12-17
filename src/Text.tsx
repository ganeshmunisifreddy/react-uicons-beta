import * as React from "react";

function Text(props: any) {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1h-2v8h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V8H9a1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3z" />
    </svg>
  );
}

export default Text;
