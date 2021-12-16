import * as React from "react";

function ShoppingBagAddSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M21 6h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h11.686A6 6 0 1 1 24 14.537V9a3 3 0 0 0-3-3ZM8 6a4 4 0 0 1 8 0Z" />
      <path d="M23 18h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default ShoppingBagAddSolid;
