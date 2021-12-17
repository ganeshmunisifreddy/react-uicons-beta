import * as React from "react";

function NetworkSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M24 21a1 1 0 0 1-1 1h-8.184a2.982 2.982 0 0 1-5.632 0H1a1 1 0 0 1 0-2h8.184A3 3 0 0 1 11 18.184V14H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.586l.414.414a1.986 1.986 0 0 0 1.414.586h3.172A1.986 1.986 0 0 0 15 10.414l.414-.414H21a1 1 0 0 1 1 1 3 3 0 0 1-3 3h-6v4.184A3 3 0 0 1 14.816 20H23a1 1 0 0 1 1 1zM10 8.586l.414.414h3.172L14 8.586A1.986 1.986 0 0 1 15.414 8H21V4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v4h5.586A1.986 1.986 0 0 1 10 8.586z" />
    </svg>
  );
}

export default NetworkSolid;
