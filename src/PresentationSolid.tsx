import * as React from "react";

function PresentationSolid(props: any) {
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
      <path d="M22 12V5a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v7zM23 14H1a1 1 0 0 0 0 2h10v4H9a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2v-4h10a1 1 0 0 0 0-2z" />
    </svg>
  );
}

export default PresentationSolid;
