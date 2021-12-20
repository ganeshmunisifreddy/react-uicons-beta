import * as React from "react";

function MenuDotsSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <circle cx={2} cy={12} r={2} />
      <circle cx={12} cy={12} r={2} />
      <circle cx={22} cy={12} r={2} />
    </svg>
  );
}

export default MenuDotsSolid;
