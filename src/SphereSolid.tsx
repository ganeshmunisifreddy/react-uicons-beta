import * as React from "react";

function SphereSolid(props: any) {
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
      <path d="M12 6c6.841 0 12 2.579 12 6a12 12 0 0 0-24 0c0-3.421 5.159-6 12-6Z" />
      <ellipse cx={12} cy={12} rx={10} ry={4} />
      <path d="M12 18c-6.841 0-12-2.579-12-6a12 12 0 0 0 24 0c0 3.421-5.159 6-12 6Z" />
    </svg>
  );
}

export default SphereSolid;
