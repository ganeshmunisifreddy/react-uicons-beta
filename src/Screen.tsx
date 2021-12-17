import * as React from "react";

function Screen(props: any) {
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
      <path d="M19 3H5a5.006 5.006 0 0 0-5 5v6a5.006 5.006 0 0 0 5 5h6v1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-1h6a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5Zm3 11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
    </svg>
  );
}

export default Screen;
