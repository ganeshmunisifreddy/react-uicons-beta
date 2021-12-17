import * as React from "react";

function AngleLeftSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M17.921 1.505a1.5 1.5 0 0 1-.44 1.06l-7.672 7.672a2.5 2.5 0 0 0 0 3.536l7.662 7.662a1.5 1.5 0 0 1-2.121 2.121L7.688 15.9a5.506 5.506 0 0 1 0-7.779L15.36.444a1.5 1.5 0 0 1 2.561 1.061Z" />
    </svg>
  );
}

export default AngleLeftSolid;
