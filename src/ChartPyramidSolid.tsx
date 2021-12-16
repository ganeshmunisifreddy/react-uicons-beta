import * as React from "react";

function ChartPyramidSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M.587 18.24A4 4 0 0 0 4.179 24H19.82a4 4 0 0 0 3.593-5.76L22.806 17H1.194ZM19.377 10H4.623l-2.449 5h19.652l-2.449-5zM15.593 2.275a4 4 0 0 0-7.185 0L5.6 8h12.8Z" />
    </svg>
  );
}

export default ChartPyramidSolid;
