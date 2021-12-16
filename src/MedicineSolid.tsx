import * as React from "react";

function MedicineSolid(props: any) {
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
      <path d="M16 9V7H8v2a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5zm-1 8h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2zm.5-12h-7a2.5 2.5 0 0 1 0-5h7a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default MedicineSolid;
