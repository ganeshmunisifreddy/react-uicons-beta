import * as React from "react";

function ScissorsSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M19 14a4.929 4.929 0 0 0-2.352.615L13.3 10.6l7.467-8.96A1 1 0 0 0 19.231.36L12 9.038 4.768.36a1 1 0 0 0-1.536 1.28L10.7 10.6l-3.348 4.015A4.941 4.941 0 0 0 5 14a5 5 0 1 0 5 5 4.947 4.947 0 0 0-1.112-3.1L12 12.162l3.111 3.738A4.955 4.955 0 0 0 14 19a5 5 0 1 0 5-5zM5 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
    </svg>
  );
}

export default ScissorsSolid;
