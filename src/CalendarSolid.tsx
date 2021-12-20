import * as React from "react";

function CalendarSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M0 19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-9H0Zm17-4.5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Zm-5 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Zm-5 0A1.5 1.5 0 1 1 5.5 16 1.5 1.5 0 0 1 7 14.5ZM19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5a5.006 5.006 0 0 0-5 5v1h24V7a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  );
}

export default CalendarSolid;
