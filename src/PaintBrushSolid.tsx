import * as React from "react";

function PaintBrushSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M2.748 24a2.755 2.755 0 0 1-2.719-3.151c.259-1.806 1.133-5.134 2.373-6.374A5.037 5.037 0 0 1 9.525 21.6c-1.239 1.239-4.567 2.113-6.374 2.372a2.741 2.741 0 0 1-.403.028zM23.1.9a3.139 3.139 0 0 0-4.33 0L8.27 11.4a6.976 6.976 0 0 1 4.33 4.338L23.1 5.23a3.068 3.068 0 0 0 0-4.33z" />
    </svg>
  );
}

export default PaintBrushSolid;
