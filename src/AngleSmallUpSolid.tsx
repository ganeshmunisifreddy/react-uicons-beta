import * as React from "react";

function AngleSmallUpSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="m19.061 13.439-4.586-4.585a3.583 3.583 0 0 0-4.95 0l-4.586 4.585a1.5 1.5 0 0 0 2.122 2.122l4.586-4.586a.5.5 0 0 1 .707 0l4.585 4.586a1.5 1.5 0 0 0 2.122-2.122Z" />
    </svg>
  );
}

export default AngleSmallUpSolid;
