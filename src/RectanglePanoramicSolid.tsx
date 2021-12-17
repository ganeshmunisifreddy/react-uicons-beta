import * as React from "react";

function RectanglePanoramicSolid(props: any) {
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
      <path d="M18.5 5h-13A5.506 5.506 0 0 0 0 10.5v3A5.506 5.506 0 0 0 5.5 19h13a5.506 5.506 0 0 0 5.5-5.5v-3A5.506 5.506 0 0 0 18.5 5Zm2.5 8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 13.5v-3A2.5 2.5 0 0 1 5.5 8h13a2.5 2.5 0 0 1 2.5 2.5Z" />
    </svg>
  );
}

export default RectanglePanoramicSolid;
