import * as React from "react";

function SyringeSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="m23.707 5.293-5-5a1 1 0 0 0-1.414 1.414L19.086 3.5l-2.475 2.475a5 5 0 0 0-5.487-.265l2.583 2.583a1 1 0 1 1-1.414 1.414L9.586 7 8 8.586l2.707 2.707a1 1 0 1 1-1.414 1.414L6.586 10 5 11.588l2.705 2.705a1 1 0 1 1-1.414 1.414L3.806 13.22A6.963 6.963 0 0 0 3 16.485v3.1L.293 22.293a1 1 0 1 0 1.414 1.414L4.414 21h3.1a6.954 6.954 0 0 0 4.949-2.05l5.072-5.072a4.993 4.993 0 0 0 .482-6.478L20.5 4.914l1.793 1.793a1 1 0 0 0 1.414-1.414z" />
    </svg>
  );
}

export default SyringeSolid;
