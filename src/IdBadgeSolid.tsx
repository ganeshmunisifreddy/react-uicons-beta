import * as React from "react";

function IdBadgeSolid(props: any) {
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
      <path d="M19 4h-4V3a3 3 0 0 0-6 0v1H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5zm-9 14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zm2-12a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm6 13h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm2-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM5 11h3v6H5z" />
    </svg>
  );
}

export default IdBadgeSolid;
