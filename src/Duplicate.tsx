import * as React from "react";

function Duplicate(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M21.155 3.272 18.871.913A3.02 3.02 0 0 0 16.715 0H12a5.009 5.009 0 0 0-4.9 4H7a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-.1a5.009 5.009 0 0 0 4-4.9V5.36a2.988 2.988 0 0 0-.845-2.088ZM13 22H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3v8a5.006 5.006 0 0 0 5 5h4a3 3 0 0 1-3 3Zm4-5h-5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4v2a2 2 0 0 0 2 2h2v8a3 3 0 0 1-3 3Z" />
    </svg>
  );
}

export default Duplicate;