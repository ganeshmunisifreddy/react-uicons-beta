import * as React from "react";

function MenuDotsVertical(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <circle cx={12} cy={2} r={2} />
      <circle cx={12} cy={12} r={2} />
      <circle cx={12} cy={22} r={2} />
    </svg>
  );
}

export default MenuDotsVertical;
