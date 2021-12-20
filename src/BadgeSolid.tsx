import * as React from "react";

function BadgeSolid(props: any) {
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
      <path d="M12 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm0 2a9.938 9.938 0 0 1-6-2.019V21.5a2.5 2.5 0 0 0 4.062 1.952l1.626-1.3a.5.5 0 0 1 .624 0l1.626 1.3A2.5 2.5 0 0 0 18 21.5v-5.519A9.94 9.94 0 0 1 12 18z" />
    </svg>
  );
}

export default BadgeSolid;
