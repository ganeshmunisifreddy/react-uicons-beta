import * as React from "react";

function SubtitlesSolid(props: any) {
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
      <path d="M19 2H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5ZM5 11h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm8 7H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm0-5h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default SubtitlesSolid;
