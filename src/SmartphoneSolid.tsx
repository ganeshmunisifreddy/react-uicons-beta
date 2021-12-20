import * as React from "react";

function SmartphoneSolid(props: any) {
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
      <path d="M15 0H9a5.006 5.006 0 0 0-5 5v11h16V5a5.006 5.006 0 0 0-5-5ZM4 19a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-1H4Zm8 1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export default SmartphoneSolid;
