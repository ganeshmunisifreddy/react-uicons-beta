import * as React from "react";

function Bike(props: any) {
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
      <path d="M19.783 12.079a73.63 73.63 0 0 0-.555-1.873A23.043 23.043 0 0 1 18 5a1 1 0 0 1 2 0 1 1 0 0 0 2 0 3 3 0 0 0-6 0 10.641 10.641 0 0 0 .319 2.263L11.519 11 5.971 7H9a1 1 0 0 0 0-2H5.971a1.969 1.969 0 0 0-1.162 3.559l5.071 3.712-1.438 1.119a4.954 4.954 0 1 0 1.15 1.638l7.289-5.669c.141.476.727 2.384.856 2.823a4.994 4.994 0 1 0 2.046-.1ZM5 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
    </svg>
  );
}

export default Bike;