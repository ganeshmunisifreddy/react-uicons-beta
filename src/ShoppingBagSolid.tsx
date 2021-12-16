import * as React from "react";

function ShoppingBagSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M24 9a3 3 0 0 0-3-3h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5ZM8 6a4 4 0 0 1 8 0Z" />
    </svg>
  );
}

export default ShoppingBagSolid;
