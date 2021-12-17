import * as React from "react";

function ShieldSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.418 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743Z" />
    </svg>
  );
}

export default ShieldSolid;
