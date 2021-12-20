import * as React from "react";

function RecSolid(props: any) {
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
      <circle cx={12} cy={12} r={12} />
    </svg>
  );
}

export default RecSolid;
