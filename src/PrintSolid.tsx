import * as React from "react";

function PrintSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M19 4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v1h14Z" />
      <rect x={5} y={15} width={14} height={9} rx={3} />
      <path d="M19 7H5a5.006 5.006 0 0 0-5 5v4a5 5 0 0 0 3 4.576V18a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v2.576A5 5 0 0 0 24 16v-4a5.006 5.006 0 0 0-5-5Zm-1 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default PrintSolid;
