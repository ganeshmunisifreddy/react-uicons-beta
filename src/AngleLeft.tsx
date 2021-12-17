import * as React from "react";

function AngleLeft(props: any) {
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
      <path d="M17.17 24a1 1 0 0 1-.71-.29l-8.17-8.17a5 5 0 0 1 0-7.08L16.46.29a1 1 0 1 1 1.42 1.42L9.71 9.88a3 3 0 0 0 0 4.24l8.17 8.17a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" />
    </svg>
  );
}

export default AngleLeft;
