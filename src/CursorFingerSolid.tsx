import * as React from "react";

function CursorFingerSolid(props: any) {
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
      <path d="M17.981 9.376 13 8.18v-5.6A2.564 2.564 0 0 0 10.913.034 2.5 2.5 0 0 0 8 2.5V17a1 1 0 0 1-2 0V9.66L3.211 13.3a5.021 5.021 0 0 0 .249 6.794l2.4 2.425A5.036 5.036 0 0 0 9.414 24H17a5 5 0 0 0 5-5v-4.721a5 5 0 0 0-4.019-4.903z" />
    </svg>
  );
}

export default CursorFingerSolid;
