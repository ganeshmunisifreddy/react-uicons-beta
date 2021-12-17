import * as React from "react";

function ArrowDownSolid(props: any) {
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
      <path d="M18.427 16.935a1.5 1.5 0 0 0-2.121 0l-2.781 2.779L13.5 1.5A1.5 1.5 0 0 0 12 0a1.5 1.5 0 0 0-1.5 1.5l.023 18.2-2.763-2.765a1.5 1.5 0 0 0-2.121 2.121l3.919 3.919a3.5 3.5 0 0 0 4.949 0l3.92-3.919a1.5 1.5 0 0 0 0-2.121Z" />
    </svg>
  );
}

export default ArrowDownSolid;
