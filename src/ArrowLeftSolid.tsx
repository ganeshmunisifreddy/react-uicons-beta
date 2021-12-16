import * as React from "react";

function ArrowLeftSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M4.943 5.606 1.024 9.525a3.585 3.585 0 0 0 0 4.95l3.919 3.919a1.5 1.5 0 1 0 2.121-2.121l-2.779-2.781 18.25-.023a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5L4.3 10.492l2.764-2.765a1.5 1.5 0 0 0-2.121-2.121Z" />
    </svg>
  );
}

export default ArrowLeftSolid;
