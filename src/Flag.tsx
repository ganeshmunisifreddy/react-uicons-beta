import * as React from "react";

function Flag(props: any) {
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
      <path d="M20 4h-5a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v19a1 1 0 0 0 2 0V13h8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM2 11V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zm20 2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-.142A4 4 0 0 0 15 9V6h5a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default Flag;
