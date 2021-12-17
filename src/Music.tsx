import * as React from "react";

function Music(props: any) {
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
      <path d="M19 1h-6a5.006 5.006 0 0 0-5 5v8.026A4.948 4.948 0 0 0 5 13a5 5 0 1 0 5 5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8.026A4.948 4.948 0 0 0 19 13a5 5 0 1 0 5 5V6a5.006 5.006 0 0 0-5-5ZM5 21a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
    </svg>
  );
}

export default Music;
