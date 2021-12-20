import * as React from "react";

function LeafSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M23.119.872a2.985 2.985 0 0 0-2.405-.857C17.921.285 8.528 1.448 4.9 5.072a9.931 9.931 0 0 0-.671 13.281l11.06-11.06a1 1 0 0 1 1.414 1.414L5.647 19.767a9.929 9.929 0 0 0 13.281-.667c3.676-3.677 4.8-13.041 5.059-15.823a2.987 2.987 0 0 0-.868-2.405ZM4.9 19.1q.358.357.743.671l-3.94 3.94a1 1 0 0 1-1.41-1.418l3.94-3.94q.314.384.667.747Z" />
    </svg>
  );
}

export default LeafSolid;
