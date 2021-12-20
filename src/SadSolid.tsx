import * as React from "react";

function SadSolid(props: any) {
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
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM8 8a2 2 0 0 1 2 2c0 1-.895 1-2 1s-2 0-2-1a2 2 0 0 1 2-2Zm9.746 9.667a1 1 0 0 1-1.41.081A7.51 7.51 0 0 0 12 16a7.508 7.508 0 0 0-4.336 1.748 1 1 0 0 1-1.33-1.494A9.454 9.454 0 0 1 12 14a9.454 9.454 0 0 1 5.666 2.254 1 1 0 0 1 .08 1.413ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" />
    </svg>
  );
}

export default SadSolid;
