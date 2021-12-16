import * as React from "react";

function SchoolBusSolid(props: any) {
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
      <path d="M.142 4A4 4 0 0 1 4 1h11a4 4 0 0 1 3.858 3zm8.8 16a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zm11 0a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zM10 18h3V6h-3zm9-8V6h-4v4zM8 10V6H5v4zm12 2h-5v6h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4zM3 10V6H0v4zm5 2H0v3a3 3 0 0 0 3 3h5z" />
    </svg>
  );
}

export default SchoolBusSolid;
