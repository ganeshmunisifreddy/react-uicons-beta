import * as React from "react";

function CloudSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.792 7.212A8 8 0 0 0 2 9a7.915 7.915 0 0 0 .9 3.671A5.49 5.49 0 0 0 5.5 23H16a8 8 0 0 0 1.792-15.788Z" />
    </svg>
  );
}

export default CloudSolid;
