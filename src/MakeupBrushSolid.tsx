import * as React from "react";

function MakeupBrushSolid(props: any) {
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
      <path d="M6.4 24A6.407 6.407 0 0 1 0 17.6c0-3.059 3.952-4.327 6.286-4.593a.989.989 0 0 1 .821.286l3.6 3.6a1 1 0 0 1 .287.82C10.727 20.048 9.458 24 6.4 24zm3.76-14.772-2.28 2.009 4.883 4.883 2.009-2.28zM23.284.716a2.452 2.452 0 0 0-3.337-.111L11.664 7.9l4.436 4.436 7.3-8.286a2.45 2.45 0 0 0-.116-3.334z" />
    </svg>
  );
}

export default MakeupBrushSolid;
