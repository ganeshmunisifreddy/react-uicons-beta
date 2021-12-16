import * as React from "react";

function Pharmacy(props: any) {
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
      <path d="M12 24a4 4 0 0 1-4-4v-4H4a4 4 0 0 1 0-8h4V4a4 4 0 0 1 8 0v4h4a4 4 0 0 1 0 8h-4v4a4 4 0 0 1-4 4zM4 10a2 2 0 0 0 0 4h5a1 1 0 0 1 1 1v5a2 2 0 0 0 4 0v-5a1 1 0 0 1 1-1h5a2 2 0 0 0 0-4h-5a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1z" />
    </svg>
  );
}

export default Pharmacy;