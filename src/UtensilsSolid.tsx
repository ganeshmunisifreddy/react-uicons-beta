import * as React from "react";

function UtensilsSolid(props: any) {
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
      <path d="M22 10a12.64 12.64 0 0 1-5 9.775V23a1 1 0 0 1-2 0V2A1.9 1.9 0 0 1 16.131.217a2.194 2.194 0 0 1 2.356.459A13.474 13.474 0 0 1 22 10ZM11 0a1 1 0 0 0-1 1v6a3 3 0 0 1-2 2.816V1a1 1 0 0 0-2 0v8.816A3 3 0 0 1 4 7V1a1 1 0 0 0-2 0v6a5.009 5.009 0 0 0 4 4.9V23a1 1 0 0 0 2 0V11.9A5.009 5.009 0 0 0 12 7V1a1 1 0 0 0-1-1Z" />
    </svg>
  );
}

export default UtensilsSolid;
