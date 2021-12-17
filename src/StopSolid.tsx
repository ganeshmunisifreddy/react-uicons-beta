import * as React from "react";

function StopSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M106.667 0h298.667C464.244 0 512 47.756 512 106.667v298.667C512 464.244 464.244 512 405.333 512H106.667C47.756 512 0 464.244 0 405.333V106.667C0 47.756 47.756 0 106.667 0z" />
    </svg>
  );
}

export default StopSolid;
