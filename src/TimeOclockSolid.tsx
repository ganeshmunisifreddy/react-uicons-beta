import * as React from "react";

function TimeOclockSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 14a1.994 1.994 0 0 1-1-3.723V7a1 1 0 0 1 2 0v3.277A1.994 1.994 0 0 1 12 14z" />
    </svg>
  );
}

export default TimeOclockSolid;
