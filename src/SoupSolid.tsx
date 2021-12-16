import * as React from "react";

function SoupSolid(props: any) {
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
      <path d="M13.861 24h-3.722a8.922 8.922 0 0 1-6.268-2.534A14.759 14.759 0 0 1 .164 15.15 4.011 4.011 0 0 1 4 10h16a4.012 4.012 0 0 1 3.838 5.15 14.741 14.741 0 0 1-3.708 6.316A8.918 8.918 0 0 1 13.861 24ZM16 6a4.381 4.381 0 0 0-1.293-3.121A2.4 2.4 0 0 1 14 1.168V1a1 1 0 1 0-2 0v.168a4.385 4.385 0 0 0 1.293 3.122A2.4 2.4 0 0 1 14 6a1 1 0 0 0 2 0Zm-4 1v-.308a4.387 4.387 0 0 0-1.292-3.121A2.4 2.4 0 0 1 10 1.864V1a1 1 0 0 0-2 0v.864a4.386 4.386 0 0 0 1.293 3.121A2.4 2.4 0 0 1 10 6.692V7a1 1 0 0 0 2 0Z" />
    </svg>
  );
}

export default SoupSolid;
