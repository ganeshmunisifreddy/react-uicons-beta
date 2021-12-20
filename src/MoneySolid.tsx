import * as React from "react";

function MoneySolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M19 4H5a5.006 5.006 0 0 0-5 5v6a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5zM4 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-8a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 7a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm8 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-8a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-6 3a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default MoneySolid;
