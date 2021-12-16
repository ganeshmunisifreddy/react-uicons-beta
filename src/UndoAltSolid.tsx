import * as React from "react";

function UndoAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M22.535 8.46A4.965 4.965 0 0 0 19 7H2.8l4.3-4.3a1 1 0 0 0-1.418-1.412L.732 6.237a2.5 2.5 0 0 0 0 3.535l4.95 4.951A1 1 0 1 0 7.1 13.309L2.788 9H19a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a1 1 0 0 0 0 2h14a5.006 5.006 0 0 0 5-5v-7a4.969 4.969 0 0 0-1.465-3.54Z" />
    </svg>
  );
}

export default UndoAltSolid;
