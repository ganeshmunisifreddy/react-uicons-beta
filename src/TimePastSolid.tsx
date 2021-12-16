import * as React from "react";

function TimePastSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 0a11.972 11.972 0 0 0-8 3.073V1a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2H5a.854.854 0 0 1-.1-.021A9.987 9.987 0 1 1 2 12a1 1 0 0 0-2 0A12 12 0 1 0 12 0Z" />
      <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Z" />
    </svg>
  );
}

export default TimePastSolid;
