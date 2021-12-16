import * as React from "react";

function HeadsetSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6h-3a1 1 0 0 0 0 2h5a5 5 0 0 0 2-9.576V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22Z" />
    </svg>
  );
}

export default HeadsetSolid;
