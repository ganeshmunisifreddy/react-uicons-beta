import * as React from "react";

function ArrowRight(props: any) {
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
      <path d="M23.12 9.91 19.25 6a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L21.39 11H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h20.45l-3.62 3.61a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.87-3.88a3 3 0 0 0 0-4.24Z" />
    </svg>
  );
}

export default ArrowRight;
