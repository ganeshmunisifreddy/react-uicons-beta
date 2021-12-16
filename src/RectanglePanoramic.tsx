import * as React from "react";

function RectanglePanoramic(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M19 5H5a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-4a5 5 0 0 0-5-5Zm3 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
    </svg>
  );
}

export default RectanglePanoramic;
