import * as React from "react";

function PhoneCallSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M23 11a1 1 0 0 1-1-1 8.008 8.008 0 0 0-8-8 1 1 0 0 1 0-2 10.011 10.011 0 0 1 10 10 1 1 0 0 1-1 1Zm-3-1a6 6 0 0 0-6-6 1 1 0 1 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0Zm2.183 12.164.91-1.049a3.1 3.1 0 0 0 0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1 3.1 0 0 0-4.281.006l-1.906 1.606a12.784 12.784 0 0 1-6.932-6.944l1.6-1.9a3.1 3.1 0 0 0 .007-4.282S7.291.939 7.26.908A3.082 3.082 0 0 0 2.934.862l-1.15 1C-5.01 9.744 9.62 24.261 17.762 24a6.155 6.155 0 0 0 4.421-1.836Z" />
    </svg>
  );
}

export default PhoneCallSolid;
