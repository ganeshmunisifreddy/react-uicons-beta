import * as React from "react";

function AngleSmallDownSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M19.061 7.854a1.5 1.5 0 0 0-2.122 0l-4.586 4.585a.5.5 0 0 1-.707 0L7.061 7.854a1.5 1.5 0 0 0-2.122 2.121l4.586 4.586a3.5 3.5 0 0 0 4.95 0l4.586-4.586a1.5 1.5 0 0 0 0-2.121Z" />
    </svg>
  );
}

export default AngleSmallDownSolid;
