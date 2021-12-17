import * as React from "react";

function InfoSolid(props: any) {
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
      <path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12Zm0-19a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 5Zm-1 5h1a2 2 0 0 1 2 2v6a1 1 0 0 1-2 0v-6h-1a1 1 0 0 1 0-2Z" />
    </svg>
  );
}

export default InfoSolid;
