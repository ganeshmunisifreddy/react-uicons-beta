import * as React from "react";

function AlarmClockSolid(props: any) {
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
      <path d="M24 4.5a1 1 0 0 1-2 0A2.59 2.59 0 0 0 19.215 2a1 1 0 0 1 0-2A4.6 4.6 0 0 1 24 4.5zM2 4.5A2.59 2.59 0 0 1 4.785 2a1 1 0 0 0 0-2A4.6 4.6 0 0 0 0 4.5a1 1 0 0 0 2 0zM20.319 20.176A10.98 10.98 0 0 0 13 2.051V1a1 1 0 0 0-2 0v1.051a10.98 10.98 0 0 0-7.319 18.125A3.024 3.024 0 0 0 2 23a1 1 0 0 0 2 0 1.2 1.2 0 0 1 1.11-1.229.932.932 0 0 0 .2-.062 10.924 10.924 0 0 0 13.39 0 1.033 1.033 0 0 0 .182.064A1.2 1.2 0 0 1 20 23a1 1 0 0 0 2 0 3.024 3.024 0 0 0-1.681-2.824zm-4.612-4.469a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.586l2.707 2.707a1 1 0 0 1 0 1.414z" />
    </svg>
  );
}

export default AlarmClockSolid;
