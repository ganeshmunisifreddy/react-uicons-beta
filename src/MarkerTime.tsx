import * as React from "react";

function MarkerTime(props: any) {
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
      <path d="M12 24a5.419 5.419 0 0 1-3.808-1.552L4.25 18.805A11 11 0 1 1 19.777 3.222a11 11 0 0 1 0 15.556l-3.991 3.689A5.39 5.39 0 0 1 12 24zm0-22a9 9 0 0 0-6.364 15.364L9.57 21a3.516 3.516 0 0 0 4.838.019l3.984-3.682a9 9 0 0 0-.029-12.7A8.94 8.94 0 0 0 12 2zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm1.707 6.707a1 1 0 0 0 0-1.414L13 10.586V9a1 1 0 0 0-2 0v2a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414 0z" />
    </svg>
  );
}

export default MarkerTime;
