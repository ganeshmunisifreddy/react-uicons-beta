import * as React from "react";

function BookSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17 0H8v16h14V5a5 5 0 0 0-5-5ZM4.395 16.061A3.013 3.013 0 0 1 5 16h1V.1A5 5 0 0 0 2 5v12.025a4.952 4.952 0 0 1 2.395-.964ZM22 18H5a3 3 0 0 0 0 6h12a5 5 0 0 0 5-5Z" />
    </svg>
  );
}

export default BookSolid;
