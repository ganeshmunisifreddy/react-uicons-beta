import * as React from "react";

function Mobile(props: any) {
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
      <path d="M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 19a3 3 0 0 1-3 3h-3v-1a1 1 0 0 0-2 0v1H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm-3-3a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-6-3a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 2 0V8a3 3 0 0 0-6 0v4a1 1 0 0 0 1 1zm2-6a1 1 0 0 1 1 1v1h-2V8a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export default Mobile;
