import * as React from "react";

function MinusSmall(props: any) {
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
      <rect x={6} y={11} width={12} height={2} rx={1} />
    </svg>
  );
}

export default MinusSmall;
