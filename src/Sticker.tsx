import * as React from "react";

function Sticker(props: any) {
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
      <path d="M23.967 10.417a12.04 12.04 0 1 0-13.55 13.55 3.812 3.812 0 0 0 .489.032 3.993 3.993 0 0 0 2.805-1.184l9.1-9.1a3.962 3.962 0 0 0 1.156-3.298zm-21.9.474a10.034 10.034 0 0 1 19.8-.884 12.006 12.006 0 0 0-11.86 11.852 9.988 9.988 0 0 1-7.944-10.968zM12.3 21.4a2.121 2.121 0 0 1-.278.225 10 10 0 0 1 9.606-9.607 2.043 2.043 0 0 1-.224.279z" />
    </svg>
  );
}

export default Sticker;
