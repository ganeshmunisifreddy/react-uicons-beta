import * as React from "react";

function StethoscopeSolid(props: any) {
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
      <path d="M24 9a3 3 0 1 0-4 2.816V16a6 6 0 0 1-12 0v-.08A7.006 7.006 0 0 0 14 9V5a5.006 5.006 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3v4A5 5 0 0 1 2 9V5a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0-5 5v4a7.006 7.006 0 0 0 6 6.92V16a8 8 0 0 0 16 0v-4.184A3 3 0 0 0 24 9z" />
    </svg>
  );
}

export default StethoscopeSolid;