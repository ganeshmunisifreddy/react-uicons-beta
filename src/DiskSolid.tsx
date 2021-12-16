import * as React from "react";

function DiskSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <circle cx={12} cy={14} r={2} />
      <path d="m22.536 4.122-2.658-2.658A4.99 4.99 0 0 0 19 .775V3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V0a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7.657a4.966 4.966 0 0 0-1.464-3.535ZM12 18a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
      <path d="M10 6h4a3 3 0 0 0 3-3V.064A5.128 5.128 0 0 0 16.343 0H7v3a3 3 0 0 0 3 3Z" />
    </svg>
  );
}

export default DiskSolid;
