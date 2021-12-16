import * as React from "react";

function ScreenSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M19 3H5a5.006 5.006 0 0 0-5 5v6a5.006 5.006 0 0 0 5 5h6v1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-1h6a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  );
}

export default ScreenSolid;
