import * as React from "react";

function GasPumpSolid(props: any) {
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
      <path d="M6 9h4a2 2 0 0 0-4 0Z" />
      <path d="M8 5a3.971 3.971 0 0 1 1.339.247l1.954-1.954a1 1 0 1 1 1.414 1.414L11.014 6.4A3.963 3.963 0 0 1 12 9h4V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v4h4a4 4 0 0 1 4-4Z" />
      <path d="M23.681 3.267a1 1 0 0 0-1.414 0L19.293 6.24a1 1 0 0 0-.293.707V18a1 1 0 0 1-1 1h-2v-8H0v8a5.006 5.006 0 0 0 5 5h6a5 5 0 0 0 4.576-3H18a3 3 0 0 0 3-3V7.361l2.681-2.68a1 1 0 0 0 0-1.414Z" />
    </svg>
  );
}

export default GasPumpSolid;
