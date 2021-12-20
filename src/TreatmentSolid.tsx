import * as React from "react";

function TreatmentSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M16 2h-.171A3.006 3.006 0 0 0 13 0h-2a3.006 3.006 0 0 0-2.829 2H8a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5zM9 7h2V5a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V9H9a1 1 0 0 1 0-2zm3 13H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm4-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default TreatmentSolid;
