import * as React from "react";

function TimeForward(props: any) {
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
      <path d="M23 11a1 1 0 0 0-1 1 10.034 10.034 0 1 1-2.9-7.021A.862.862 0 0 1 19 5h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V1a1 1 0 0 0-2 0v2.065A11.994 11.994 0 1 0 24 12a1 1 0 0 0-1-1z" />
      <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1z" />
    </svg>
  );
}

export default TimeForward;