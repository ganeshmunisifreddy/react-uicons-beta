import * as React from "react";

function Exclamation(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
      <path d="M12 5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Z" />
      <rect x={11} y={17} width={2} height={2} rx={1} />
    </svg>
  );
}

export default Exclamation;
