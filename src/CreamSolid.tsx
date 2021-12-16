import * as React from "react";

function CreamSolid(props: any) {
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
      <path d="M19 24H5a5.006 5.006 0 0 1-5-5v-2a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v2a5.006 5.006 0 0 1-5 5zm3-12v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2zm-3.039-6A12.664 12.664 0 0 0 17.339.406a.994.994 0 0 0-1.692.15 3.938 3.938 0 0 1-3.685 2.457H10A4.506 4.506 0 0 0 5.412 6z" />
    </svg>
  );
}

export default CreamSolid;
