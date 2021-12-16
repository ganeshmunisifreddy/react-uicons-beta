import * as React from "react";

function CaretDownSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6.414 9h11.172a1 1 0 0 1 .707 1.707l-5.586 5.586a1 1 0 0 1-1.414 0l-5.586-5.586A1 1 0 0 1 6.414 9Z" />
    </svg>
  );
}

export default CaretDownSolid;
