import * as React from "react";

function BellSchoolSolid(props: any) {
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
      <path d="M21 7a3 3 0 0 0 0 6 2.955 2.955 0 0 0 .628-.069 12.192 12.192 0 0 1-9.47 9.053.948.948 0 0 1-.791-.213A1.016 1.016 0 0 1 11 20.99v-1.061a10 10 0 0 0 7.905-5.4 4.978 4.978 0 0 1 0-9.052A10 10 0 1 0 9 19.949v1.041a3.013 3.013 0 0 0 1.085 2.316 2.95 2.95 0 0 0 2.431.646A14.27 14.27 0 0 0 24 10a3 3 0 0 0-3-3zM10 8a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default BellSchoolSolid;
