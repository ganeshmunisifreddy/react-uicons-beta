import * as React from "react";

function CopyrightSolid(props: any) {
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
      <path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12ZM7.05 7.05a7.009 7.009 0 0 1 9.9 0 1 1 0 0 1-1.414 1.414 5 5 0 1 0 0 7.072 1 1 0 0 1 1.414 1.414 7 7 0 0 1-9.9-9.9Z" />
    </svg>
  );
}

export default CopyrightSolid;
