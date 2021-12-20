import * as React from "react";

function RectangleHorizontalSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M18.5 3h-13A5.506 5.506 0 0 0 0 8.5v7A5.506 5.506 0 0 0 5.5 21h13a5.506 5.506 0 0 0 5.5-5.5v-7A5.506 5.506 0 0 0 18.5 3ZM21 15.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-7A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5Z" />
    </svg>
  );
}

export default RectangleHorizontalSolid;
