import * as React from "react";

function AmbulanceSolid(props: any) {
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
      <path d="M16 4.018a6 6 0 0 1 5.233 3.545L22.761 11H17a1 1 0 0 1-1-1zM8.942 21a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zm11 0a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zM24 16.122A2.852 2.852 0 0 1 21 19H3a3 3 0 0 1-3-3V9a5.006 5.006 0 0 1 5-5h4.2l.66-2.642a1.794 1.794 0 0 1 3.48 0L14 4v6a3 3 0 0 0 3 3h6.537A16.113 16.113 0 0 1 24 16.122zM10 12a1 1 0 0 0-1-1H8v-1a1 1 0 0 0-2 0v1H5a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 1-1z" />
    </svg>
  );
}

export default AmbulanceSolid;
