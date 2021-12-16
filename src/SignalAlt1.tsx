import * as React from "react";

function SignalAlt1(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3Zm1 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" />
    </svg>
  );
}

export default SignalAlt1;
