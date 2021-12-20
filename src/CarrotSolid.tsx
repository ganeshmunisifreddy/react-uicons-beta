import * as React from "react";

function CarrotSolid(props: any) {
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
      <path d="M23 5h-2.586l2.293-2.293a1 1 0 0 0-1.414-1.414L19 3.586V1a1 1 0 0 0-2 0v4.456a10.139 10.139 0 0 0-2.854-2.126 3.754 3.754 0 0 0-4.387 1.015l2.948 2.948a1 1 0 0 1-1.414 1.414L8.521 5.936C7.384 7.605 5.86 10.2 4.334 12.92l2.373 2.373a1 1 0 0 1-1.414 1.414l-1.971-1.971A434.779 434.779 0 0 0 .3 20.319 2.511 2.511 0 0 0 3.681 23.7c2.825-1.5 6.762-3.633 10.055-5.55l-2.443-2.443a1 1 0 0 1 1.414-1.414l2.805 2.807a27.061 27.061 0 0 0 4.11-2.821 3.766 3.766 0 0 0 1.049-4.422A10.167 10.167 0 0 0 18.544 7H23a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default CarrotSolid;
