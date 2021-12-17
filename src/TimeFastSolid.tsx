import * as React from "react";

function TimeFastSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M10 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zM1 20h6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zM1 16h4a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2z" />
      <path d="M12 0A12 12 0 0 0 0 12c0 .061.008.12.009.181A2.966 2.966 0 0 1 1 12h4a2.99 2.99 0 0 1 2.78 4.116 2.975 2.975 0 0 1 2 4 2.949 2.949 0 0 1 2.039 3.875c.061 0 .12.009.181.009a12 12 0 0 0 0-24zm3.707 15.707a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.586l2.707 2.707a1 1 0 0 1 0 1.414z" />
    </svg>
  );
}

export default TimeFastSolid;
