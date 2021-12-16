import * as React from "react";

function PackageSolid(props: any) {
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
      <path d="M24 11v12a1 1 0 0 1-2 0v-5H2v5a1 1 0 0 1-2 0V12.5a5.5 5.5 0 0 1 11 0V16h3v-5a3 3 0 0 1 3-3h1v2a1 1 0 0 0 2 0V8h1a3 3 0 0 1 3 3zM9 3.5A3.5 3.5 0 1 0 5.5 7 3.5 3.5 0 0 0 9 3.5z" />
    </svg>
  );
}

export default PackageSolid;
