import * as React from "react";

function RecordVinylSolid(props: any) {
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
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm1-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
    </svg>
  );
}

export default RecordVinylSolid;
