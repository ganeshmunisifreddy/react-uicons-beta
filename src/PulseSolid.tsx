import * as React from "react";

function PulseSolid(props: any) {
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
      <path d="M19 1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zm0 10h-2.965l-1.7 2.555A1 1 0 0 1 13.5 14h-.062a1 1 0 0 1-.833-.551l-2.229-4.461-1.044 1.567A1 1 0 0 1 8.5 11H5a1 1 0 0 1 0-2h2.965l1.7-2.555A.987.987 0 0 1 10.562 6a1 1 0 0 1 .833.551l2.229 4.459 1.044-1.567A1 1 0 0 1 15.5 9H19a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default PulseSolid;
