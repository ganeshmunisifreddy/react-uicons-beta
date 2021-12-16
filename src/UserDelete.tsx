import * as React from "react";

function UserDelete(props: any) {
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
      <path d="M17 24a1 1 0 0 1-1-1 7 7 0 0 0-14 0 1 1 0 0 1-2 0 9 9 0 0 1 18 0 1 1 0 0 1-1 1zm6-11h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM9 12a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zM9 2a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
    </svg>
  );
}

export default UserDelete;
