import * as React from "react";

function AngleDown(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 17.17a5 5 0 0 1-3.54-1.46L.29 7.54a1 1 0 0 1 1.42-1.42l8.17 8.17a3 3 0 0 0 4.24 0l8.17-8.17a1 1 0 1 1 1.42 1.42l-8.17 8.17A5 5 0 0 1 12 17.17Z" />
    </svg>
  );
}

export default AngleDown;
