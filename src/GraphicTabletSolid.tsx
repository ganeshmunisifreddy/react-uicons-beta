import * as React from "react";

function GraphicTabletSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M19 4H9v16h10a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM2 9v2H1a1 1 0 0 0 0 2h1v2a5.006 5.006 0 0 0 5 5V4a5.006 5.006 0 0 0-5 5Z" />
    </svg>
  );
}

export default GraphicTabletSolid;
