import * as React from "react";

function AngleUpSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M22.5 18a1.5 1.5 0 0 1-1.061-.44l-7.671-7.671a2.5 2.5 0 0 0-3.536 0L2.57 17.551A1.5 1.5 0 0 1 .449 15.43l7.662-7.662a5.505 5.505 0 0 1 7.778 0l7.672 7.672A1.5 1.5 0 0 1 22.5 18Z" />
    </svg>
  );
}

export default AngleUpSolid;
