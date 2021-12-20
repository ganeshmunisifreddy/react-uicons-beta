import * as React from "react";

function UserDeleteSolid(props: any) {
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
      <path d="M24 12a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zM9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6zm0 2a9.01 9.01 0 0 0-9 9 1 1 0 0 0 1 1h16a1 1 0 0 0 1-1 9.01 9.01 0 0 0-9-9z" />
    </svg>
  );
}

export default UserDeleteSolid;
