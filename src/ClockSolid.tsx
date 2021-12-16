import * as React from "react";

function ClockSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm1 11.879a1 1 0 0 1-.469.848l-3.84 2.4a1 1 0 1 1-1.062-1.7L11 11.325V7a1 1 0 0 1 2 0Z" />
    </svg>
  );
}

export default ClockSolid;
