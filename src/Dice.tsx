import * as React from "react";

function Dice(props: any) {
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
      <path d="M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm6 10a1 1 0 1 0 1-1 1 1 0 0 0-1 1zM6 7a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0-1 1zM6 17a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0-1 1z" />
    </svg>
  );
}

export default Dice;
