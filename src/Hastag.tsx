import * as React from "react";

function Hastag(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M23 7h-4.809l.8-5.865a1 1 0 1 0-1.982-.27L16.173 7H9.191l.8-5.865a1 1 0 1 0-1.982-.27L7.173 7H2a1 1 0 0 0 0 2h4.9l-.818 6H1a1 1 0 0 0 0 2h4.809l-.8 5.865a1 1 0 0 0 1.982.27L7.827 17h6.982l-.8 5.865a1 1 0 0 0 1.982.27L16.827 17H22a1 1 0 0 0 0-2h-4.9l.818-6H23a1 1 0 0 0 0-2Zm-7.918 8H8.1l.818-6H15.9Z" />
    </svg>
  );
}

export default Hastag;