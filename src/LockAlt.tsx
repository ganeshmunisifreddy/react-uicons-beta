import * as React from "react";

function LockAlt(props: any) {
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
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-15a2.993 2.993 0 0 0-1 5.816V16a1 1 0 0 0 2 0v-3.184A2.993 2.993 0 0 0 12 7zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
    </svg>
  );
}

export default LockAlt;
