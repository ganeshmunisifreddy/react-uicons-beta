import * as React from "react";

function ShopSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 13a5 5 0 0 1-8 0 4.956 4.956 0 0 1-7 .977V19a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5v-5.026A4.956 4.956 0 0 1 16 13Z" />
      <path d="M21.7 3.131A3.975 3.975 0 0 0 17.792 0H17v3a1 1 0 0 1-2 0V0H9v3a1 1 0 0 1-2 0V0h-.792A3.975 3.975 0 0 0 2.3 3.132L1.022 8.9 1 10.02A3 3 0 0 0 7 10a1 1 0 0 1 2 0 3 3 0 1 0 6 0 1 1 0 0 1 2 0 3 3 0 1 0 6 0v-.893Z" />
    </svg>
  );
}

export default ShopSolid;