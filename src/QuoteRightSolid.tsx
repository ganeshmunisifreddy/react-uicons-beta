import * as React from "react";

function QuoteRightSolid(props: any) {
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
      <path d="M8 4H4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 2 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2ZM22 4h-4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 16 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2Z" />
    </svg>
  );
}

export default QuoteRightSolid;
