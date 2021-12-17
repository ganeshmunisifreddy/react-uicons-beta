import * as React from "react";

function MoonSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M15 24a12.021 12.021 0 0 1-8.914-3.966 11.9 11.9 0 0 1-3.02-9.309A12.122 12.122 0 0 1 13.085.152a13.061 13.061 0 0 1 5.031.205 2.5 2.5 0 0 1 1.108 4.226c-4.56 4.166-4.164 10.644.807 14.41a2.5 2.5 0 0 1-.7 4.32A13.894 13.894 0 0 1 15 24Z" />
    </svg>
  );
}

export default MoonSolid;
