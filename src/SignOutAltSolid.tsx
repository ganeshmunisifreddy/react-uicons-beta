import * as React from "react";

function SignOutAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M11.476 15a1 1 0 0 0-1 1v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2.476a3 3 0 0 1 3 3v3a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2.476a5.006 5.006 0 0 0 5-5v-3a1 1 0 0 0-1-1Z" />
      <path d="m22.867 9.879-4.586-4.586a1 1 0 1 0-1.414 1.414l4.263 4.263L6 11a1 1 0 0 0 0 2l15.188-.03-4.323 4.323a1 1 0 1 0 1.414 1.414l4.586-4.586a3 3 0 0 0 .002-4.242Z" />
    </svg>
  );
}

export default SignOutAltSolid;
