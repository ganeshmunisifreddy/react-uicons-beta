import * as React from "react";

function PaletteSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="m20.057 16.8.1.1a1.912 1.912 0 0 0 1.769.521 1.888 1.888 0 0 0 1.377-1.177 11.924 11.924 0 0 0 .777-4.544A12.155 12.155 0 0 0 12.5.007 12 12 0 0 0 .083 12a12.014 12.014 0 0 0 12 12c.338 0 .67-.022 1-.05a1 1 0 0 0 .916-1l-.032-3.588a3.567 3.567 0 0 1 6.09-2.562Zm-2.942-8.75a1.5 1.5 0 1 1-1.065 1.835 1.5 1.5 0 0 1 1.065-1.835Zm-9.23 8.9a1.5 1.5 0 1 1 1.065-1.835 1.5 1.5 0 0 1-1.065 1.835Zm0-6A1.5 1.5 0 1 1 8.95 9.115a1.5 1.5 0 0 1-1.065 1.835Zm5-3a1.5 1.5 0 1 1 1.065-1.835 1.5 1.5 0 0 1-1.065 1.835Z" />
    </svg>
  );
}

export default PaletteSolid;
