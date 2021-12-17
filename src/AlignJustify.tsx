import * as React from "react";

function AlignJustify(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 19H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default AlignJustify;
