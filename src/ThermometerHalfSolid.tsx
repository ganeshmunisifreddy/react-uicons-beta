import * as React from "react";

function ThermometerHalfSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M19 17a7 7 0 1 1-12-4.889V5c.211-6.609 9.791-6.6 10 0v7.111A7.007 7.007 0 0 1 19 17Zm-4 0a3 3 0 0 0-2-2.828V8a1 1 0 0 0-2 0v6.172A3 3 0 1 0 15 17Z" />
    </svg>
  );
}

export default ThermometerHalfSolid;
