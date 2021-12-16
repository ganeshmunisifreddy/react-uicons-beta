import * as React from "react";

function EarningsSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M19 0h-5a1 1 0 0 0 0 2h5a2.951 2.951 0 0 1 1.285.3L.293 22.293a1 1 0 1 0 1.414 1.414L21.7 3.715A2.951 2.951 0 0 1 22 5v5a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z" />
      <path d="M6 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM18 14a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
    </svg>
  );
}

export default EarningsSolid;