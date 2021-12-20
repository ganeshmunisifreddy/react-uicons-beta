import * as React from "react";

function HomeLocationSolid(props: any) {
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
      <path d="M12 9a4 4 0 0 0-2.829 6.829l2.287 2.236a.78.78 0 0 0 1.083 0l2.3-2.244A4 4 0 0 0 12 9Zm0 4.992a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm9.8-8.413-7-4.724a4.979 4.979 0 0 0-5.6 0l-7 4.724A5 5 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.724a5 5 0 0 0-2.2-4.145Zm-5.557 11.664L13.94 19.5a2.79 2.79 0 0 1-3.88 0l-2.3-2.245a6 6 0 1 1 8.478-8.493 6.008 6.008 0 0 1 .005 8.481Z" />
    </svg>
  );
}

export default HomeLocationSolid;
