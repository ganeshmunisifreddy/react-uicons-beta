import * as React from "react";

function Dollar(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M13.932 4A3.071 3.071 0 0 1 17 7.068a1 1 0 0 0 2 0v-.123A5.073 5.073 0 0 0 13.932 2H13V1a1 1 0 0 0-2 0v1h-.932a5.068 5.068 0 0 0-1.6 9.875L11 12.72V20h-.932A3.071 3.071 0 0 1 7 16.932a1 1 0 0 0-2 0v.123A5.073 5.073 0 0 0 10.068 22H11v1a1 1 0 0 0 2 0v-1h.932a5.068 5.068 0 0 0 1.6-9.875L13 11.28V4Zm.97 10.021a3.068 3.068 0 0 1-.97 5.979H13v-6.613ZM11 10.613l-1.9-.634A3.068 3.068 0 0 1 10.068 4H11Z" />
    </svg>
  );
}

export default Dollar;