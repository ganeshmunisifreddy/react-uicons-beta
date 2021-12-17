import * as React from "react";

function AngleDownSolid(props: any) {
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
      <path d="M1.51 6.079a1.492 1.492 0 0 1 1.06.44l7.673 7.672a2.5 2.5 0 0 0 3.536 0l7.661-7.662a1.5 1.5 0 1 1 2.121 2.121L15.9 16.312a5.505 5.505 0 0 1-7.778 0L.449 8.64A1.5 1.5 0 0 1 1.51 6.079Z" />
    </svg>
  );
}

export default AngleDownSolid;
