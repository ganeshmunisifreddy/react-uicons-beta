import * as React from "react";

function SmileWinkSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM7 9h3a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm10.666 6.746A9.454 9.454 0 0 1 12 18a9.454 9.454 0 0 1-5.666-2.254 1 1 0 0 1 1.332-1.492A7.509 7.509 0 0 0 12 16a7.508 7.508 0 0 0 4.336-1.748 1 1 0 0 1 1.33 1.494ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" />
    </svg>
  );
}

export default SmileWinkSolid;
