import * as React from "react";

function PictureSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M11.122 12.536a3 3 0 0 0-4.244 0l-6.84 6.84A4.991 4.991 0 0 0 5 24h14a4.969 4.969 0 0 0 2.753-.833Z" />
      <circle cx={18} cy={6} r={2} />
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v11.586l5.464-5.464a5 5 0 0 1 7.072 0l10.631 10.631A4.969 4.969 0 0 0 24 19V5a5.006 5.006 0 0 0-5-5Zm-1 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
    </svg>
  );
}

export default PictureSolid;
