import * as React from "react";

function StopwatchSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M20.732 4.792A3.672 3.672 0 0 0 22 5a1 1 0 0 0 0-2c-.785 0-1-.215-1-1a1 1 0 0 0-2 0 3.513 3.513 0 0 0 .28 1.417l-.706.784A10.923 10.923 0 0 0 13 2.051V1a1 1 0 0 0-2 0v1.051A10.923 10.923 0 0 0 5.426 4.2l-.706-.783A3.513 3.513 0 0 0 5 2a1 1 0 0 0-2 0c0 .785-.215 1-1 1a1 1 0 0 0 0 2 3.672 3.672 0 0 0 1.268-.208l.672.747a11 11 0 1 0 16.12 0ZM12 15a1.994 1.994 0 0 1-1-3.723V7a1 1 0 0 1 2 0v4.277A1.994 1.994 0 0 1 12 15Z" />
    </svg>
  );
}

export default StopwatchSolid;