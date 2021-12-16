import * as React from "react";

function ChartPieSolid(props: any) {
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
      <path d="M12.3 10.178a4.989 4.989 0 0 0 .363.671l10.862-2.161A11.962 11.962 0 0 0 8.216.621Z" />
      <path d="M12.631 13.742a7.008 7.008 0 0 1-2.169-2.773L6.377 1.406a11.991 11.991 0 1 0 14.512 18.626Z" />
      <path d="m14.365 12.549 7.741 5.9A11.916 11.916 0 0 0 24 12a12.055 12.055 0 0 0-.081-1.351Z" />
    </svg>
  );
}

export default ChartPieSolid;
