import * as React from "react";

function Browser(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M19 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zM5 3h14a3 3 0 0 1 3 3v1H2V6a3 3 0 0 1 3-3zm14 18H5a3 3 0 0 1-3-3V9h20v9a3 3 0 0 1-3 3zm0-8a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1zm-4 4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zM3 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1z" />
    </svg>
  );
}

export default Browser;