import * as React from "react";

function TriangleSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path
        d="M19.948 23H4.052A4.03 4.03 0 0 1 .6 21.088a3.947 3.947 0 0 1-.182-3.86L8.38 3.212a4.068 4.068 0 0 1 7.253.026l7.922 13.941a3.967 3.967 0 0 1-.156 3.909A4.03 4.03 0 0 1 19.948 23Z"
        data-name="Capa 13"
      />
    </svg>
  );
}

export default TriangleSolid;
