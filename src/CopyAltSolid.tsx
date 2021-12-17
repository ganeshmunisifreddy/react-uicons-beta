import * as React from "react";

function CopyAltSolid(props: any) {
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
      <path d="M13 4a1 1 0 0 0 1 1h3.966a2.981 2.981 0 0 0-.811-1.728L14.871.913A3.011 3.011 0 0 0 13 .029zm-2 0V0H7a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V7h-4a3 3 0 0 1-3-3zm6 20H8a1 1 0 0 1 0-2h9a3 3 0 0 0 3-3V8a1 1 0 0 1 2 0v11a5.006 5.006 0 0 1-5 5z" />
    </svg>
  );
}

export default CopyAltSolid;
