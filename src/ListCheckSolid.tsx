import * as React from "react";

function ListCheckSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M4 22a2.982 2.982 0 0 1-2.122-.879L.334 19.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.6-3.431a1 1 0 1 1 1.378 1.448L6.1 21.138A2.964 2.964 0 0 1 4 22zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM4 14a2.982 2.982 0 0 1-2.122-.879L.293 11.536a1 1 0 0 1 1.414-1.414l1.586 1.585a1.023 1.023 0 0 0 1.414 0l3.6-3.431a1 1 0 1 1 1.382 1.448L6.1 13.138A2.964 2.964 0 0 1 4 14zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM4 6a2.982 2.982 0 0 1-2.122-.879L.334 3.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04L8.311.276a1 1 0 0 1 1.378 1.448L6.1 5.138A2.964 2.964 0 0 1 4 6zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default ListCheckSolid;
