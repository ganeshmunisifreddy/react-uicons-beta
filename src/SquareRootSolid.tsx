import * as React from "react";

function SquareRootSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M16.04 4a3.009 3.009 0 0 0-2.891 2.2L9.1 20.768A1.678 1.678 0 0 1 7.5 22a1.747 1.747 0 0 1-1.622-1.159l-2.793-7.68a3.461 3.461 0 0 0-2.312-2.189 1 1 0 0 1 .471-1.944 5.434 5.434 0 0 1 3.721 3.45l2.474 6.8 3.784-13.616A5.015 5.015 0 0 1 16.04 2H23a1 1 0 0 1 0 2zm7.56 8.2a1 1 0 0 0-1.4.2L20 15.333 17.8 12.4a1 1 0 0 0-1.6 1.2l2.55 3.4-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2-2.933 2.2 2.933a1 1 0 1 0 1.6-1.2L21.25 17l2.55-3.4a1 1 0 0 0-.2-1.4z" />
    </svg>
  );
}

export default SquareRootSolid;
