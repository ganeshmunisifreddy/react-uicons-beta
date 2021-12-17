import * as React from "react";

function SmileWink(props: any) {
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
      <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.666 13.746a1 1 0 0 0-1.33-1.494A7.508 7.508 0 0 1 12 16a7.509 7.509 0 0 1-4.334-1.746 1 1 0 0 0-1.332 1.492A9.454 9.454 0 0 0 12 18a9.454 9.454 0 0 0 5.666-2.254ZM14 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm-3 0a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1Z" />
    </svg>
  );
}

export default SmileWink;
