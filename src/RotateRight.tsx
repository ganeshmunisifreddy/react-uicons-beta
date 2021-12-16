import * as React from "react";

function RotateRight(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M21.962 12.875A10.03 10.03 0 1 1 19.122 5H16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4.143A1.858 1.858 0 0 0 22 5.143V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.078A11.985 11.985 0 1 0 23.95 13.1a1.007 1.007 0 0 0-1-1.1.982.982 0 0 0-.988.875Z" />
    </svg>
  );
}

export default RotateRight;
