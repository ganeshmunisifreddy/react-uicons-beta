import * as React from "react";

function FlagSolid(props: any) {
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
      <path d="M1 24a1 1 0 0 1-1-1V4a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H2v10a1 1 0 0 1-1 1zM20 4h-3v5a6.006 6.006 0 0 1-6 6h-.444A3.987 3.987 0 0 0 14 17h6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z" />
    </svg>
  );
}

export default FlagSolid;
