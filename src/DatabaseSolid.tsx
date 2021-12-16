import * as React from "react";

function DatabaseSolid(props: any) {
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
      <path d="M21 17H10v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6zM21 9H10v2a1 1 0 0 1-2 0V9H6v2a1 1 0 0 1-2 0V9H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6zM21 1H10v2a1 1 0 0 1-2 0V1H6v2a1 1 0 0 1-2 0V1H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6z" />
    </svg>
  );
}

export default DatabaseSolid;
