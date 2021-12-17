import * as React from "react";

function UndoSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M15 7h-4.83V5.414A2 2 0 0 0 6.756 4L.876 9.879a3 3 0 0 0 0 4.242L6.756 20a2 2 0 0 0 3.414-1.414V17H16a6.006 6.006 0 0 1 6 6 1 1 0 0 0 2 0v-7a9.01 9.01 0 0 0-9-9Z" />
    </svg>
  );
}

export default UndoSolid;
