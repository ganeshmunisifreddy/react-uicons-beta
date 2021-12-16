import * as React from "react";

function UnlockSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17 8H7V7a5 5 0 0 1 9.375-2.422 1 1 0 0 0 1.749-.971A7 7 0 0 0 5 7v1.424A5 5 0 0 0 2 13v6a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-6a5.006 5.006 0 0 0-5-5Zm-4 9a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z" />
    </svg>
  );
}

export default UnlockSolid;
