import * as React from "react";

function MenuBurger(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <rect y={11} width={24} height={2} rx={1} />
      <rect y={4} width={24} height={2} rx={1} />
      <rect y={18} width={24} height={2} rx={1} />
    </svg>
  );
}

export default MenuBurger;
