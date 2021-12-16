import * as React from "react";

function UserRemoveSolid(props: any) {
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
      <path d="M3 6a6 6 0 1 1 6 6 6.006 6.006 0 0 1-6-6zm6 8a9.01 9.01 0 0 0-9 9 1 1 0 0 0 1 1h16a1 1 0 0 0 1-1 9.01 9.01 0 0 0-9-9zm12.414-2 2.293-2.293a1 1 0 0 0-1.414-1.414L20 10.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L18.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L20 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414z" />
    </svg>
  );
}

export default UserRemoveSolid;
