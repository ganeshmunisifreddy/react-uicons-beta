import * as React from "react";

function Bold(props: any) {
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
      <path d="M17.954 10.663A6.986 6.986 0 0 0 12 0H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10a6.994 6.994 0 0 0 2.954-13.337ZM7 4h5a3 3 0 0 1 0 6H7Zm8 16H7v-6h8a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

export default Bold;
