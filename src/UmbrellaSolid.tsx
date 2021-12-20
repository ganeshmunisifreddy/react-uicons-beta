import * as React from "react";

function UmbrellaSolid(props: any) {
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
      <path d="M23.717 9.549A12.834 12.834 0 0 0 13 2.043V1a1 1 0 0 0-2 0v1.043A12.843 12.843 0 0 0 .267 9.549a3.945 3.945 0 0 0 .405 3.682A4.015 4.015 0 0 0 4 15h7v6a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0v-6h6.983a4.017 4.017 0 0 0 3.329-1.769 3.948 3.948 0 0 0 .405-3.682z" />
    </svg>
  );
}

export default UmbrellaSolid;
