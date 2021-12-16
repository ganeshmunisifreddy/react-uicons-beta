import * as React from "react";

function Utensils(props: any) {
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
      <path d="M12 1v6a5.009 5.009 0 0 1-4 4.9V23a1 1 0 0 1-2 0V11.9A5.009 5.009 0 0 1 2 7V1a1 1 0 0 1 2 0v6a3 3 0 0 0 2 2.816V1a1 1 0 0 1 2 0v8.816A3 3 0 0 0 10 7V1a1 1 0 0 1 2 0Zm10 9a12.64 12.64 0 0 1-5 9.775V23a1 1 0 0 1-2 0V2A1.9 1.9 0 0 1 16.131.217a2.194 2.194 0 0 1 2.356.459A13.474 13.474 0 0 1 22 10Zm-2 0a11.7 11.7 0 0 0-3-7.937V17.07A10.3 10.3 0 0 0 20 10Z" />
    </svg>
  );
}

export default Utensils;
