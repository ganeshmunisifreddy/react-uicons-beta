import * as React from "react";

function RectabgleVerticalSolid(props: any) {
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
      <path d="M15.5 0h-7A5.506 5.506 0 0 0 3 5.5v13A5.506 5.506 0 0 0 8.5 24h7a5.506 5.506 0 0 0 5.5-5.5v-13A5.506 5.506 0 0 0 15.5 0ZM18 18.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 18.5v-13A2.5 2.5 0 0 1 8.5 3h7A2.5 2.5 0 0 1 18 5.5Z" />
    </svg>
  );
}

export default RectabgleVerticalSolid;
