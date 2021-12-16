import * as React from "react";

function Brush(props: any) {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v5a7.009 7.009 0 0 0 7 7h2v4a3 3 0 0 0 6 0v-4h2a7.009 7.009 0 0 0 7-7V5a5.006 5.006 0 0 0-5-5zM2 5a3 3 0 0 1 3-3h5v1a1 1 0 0 0 2 0V2h2v3a1 1 0 0 0 2 0V2h2v5a1 1 0 0 0 2 0V2.184A3 3 0 0 1 22 5v5H2zm15 10h-3a1 1 0 0 0-1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 0-1-1H7a5 5 0 0 1-4.576-3h19.152A5 5 0 0 1 17 15z" />
    </svg>
  );
}

export default Brush;
