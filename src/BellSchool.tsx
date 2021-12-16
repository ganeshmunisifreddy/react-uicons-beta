import * as React from "react";

function BellSchool(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M10 8a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm14 2a14.27 14.27 0 0 1-11.484 13.952 2.95 2.95 0 0 1-2.431-.646A3.013 3.013 0 0 1 9 20.99v-1.041a10 10 0 1 1 9.382-15.394A1 1 0 1 1 16.7 5.646a8 8 0 1 0 0 8.708 1 1 0 1 1 1.677 1.091A9.959 9.959 0 0 1 11 19.937v1.053a1.016 1.016 0 0 0 .367.781.948.948 0 0 0 .791.213 12.192 12.192 0 0 0 9.47-9.053A2.955 2.955 0 0 1 21 13a3 3 0 1 1 3-3zm-2 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1z" />
    </svg>
  );
}

export default BellSchool;
