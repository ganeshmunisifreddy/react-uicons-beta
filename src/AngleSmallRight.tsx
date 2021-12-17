import * as React from "react";

function AngleSmallRight(props: any) {
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
      <path d="m15.4 9.88-4.59-4.59a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.6 4.58a1 1 0 0 1 0 1.42l-4.6 4.58a1 1 0 0 0 1.41 1.42l4.59-4.59a3 3 0 0 0 0-4.24Z" />
    </svg>
  );
}

export default AngleSmallRight;
