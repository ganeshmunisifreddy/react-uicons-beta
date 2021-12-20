import * as React from "react";

function MapSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M7 23.894a4.57 4.57 0 0 1-.527-.122l-2.869-.9a5.013 5.013 0 0 1-3.6-4.8V6A5 5 0 0 1 6.92 1.388l.08.037ZM20.68 1.167l-.021-.007-2.715-.9A4.951 4.951 0 0 0 17 .053v22.262l2.054.592A4 4 0 0 0 24 19.021V5.876a5.01 5.01 0 0 0-3.32-4.709ZM15 .19S9.157 1.863 9 1.88v22c.1-.021 6-1.636 6-1.636Z" />
    </svg>
  );
}

export default MapSolid;
