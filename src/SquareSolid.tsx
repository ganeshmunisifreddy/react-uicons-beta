import * as React from "react";

function SquareSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M18.5 0h-13A5.506 5.506 0 0 0 0 5.5v13A5.506 5.506 0 0 0 5.5 24h13a5.506 5.506 0 0 0 5.5-5.5v-13A5.506 5.506 0 0 0 18.5 0ZM21 18.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5Z" />
    </svg>
  );
}

export default SquareSolid;
