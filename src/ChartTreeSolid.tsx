import * as React from "react";

function ChartTreeSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M22 18.184V18a5.006 5.006 0 0 0-5-5h-4v-1.09a6 6 0 1 0-2 0V13H7a5.006 5.006 0 0 0-5 5v.184a3 3 0 1 0 2 0V18a3 3 0 0 1 3-3h4v3.184a3 3 0 1 0 2 0V15h4a3 3 0 0 1 3 3v.184a3 3 0 1 0 2 0Z" />
    </svg>
  );
}

export default ChartTreeSolid;
