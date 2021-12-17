import * as React from "react";

function GraphicTablet(props: any) {
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
      <path d="M19 4H7a5.006 5.006 0 0 0-5 5v2H1a1 1 0 0 0 0 2h1v2a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM4 15v-2a1 1 0 0 0 0-2V9a3 3 0 0 1 3-3v12a3 3 0 0 1-3-3Zm18 0a3 3 0 0 1-3 3H9V6h10a3 3 0 0 1 3 3Z" />
    </svg>
  );
}

export default GraphicTablet;
