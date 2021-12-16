import * as React from "react";

function CameraSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="m17.721 3-1.413-1.832A3.023 3.023 0 0 0 13.932 0h-3.864a3.023 3.023 0 0 0-2.376 1.168L6.279 3Z" />
      <circle cx={12} cy={14} r={4} />
      <path d="M19 5H5a5.006 5.006 0 0 0-5 5v9a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-9a5.006 5.006 0 0 0-5-5Zm-7 15a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Z" />
    </svg>
  );
}

export default CameraSolid;