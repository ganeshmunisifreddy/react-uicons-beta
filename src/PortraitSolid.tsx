import * as React from "react";

function PortraitSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5v-3a7 7 0 0 1 14 0v3a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm-7 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
      <circle cx={12} cy={8} r={2} />
      <path d="M12 16a5.006 5.006 0 0 0-5 5v3h10v-3a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  );
}

export default PortraitSolid;
