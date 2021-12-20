import * as React from "react";

function ArrowRightSolid(props: any) {
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
      <path d="m19.122 18.394 3.919-3.919a3.585 3.585 0 0 0 0-4.95l-3.919-3.919A1.5 1.5 0 0 0 17 7.727l2.78 2.781-18.25.023a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5l18.231-.023L17 16.273a1.5 1.5 0 0 0 2.121 2.121Z" />
    </svg>
  );
}

export default ArrowRightSolid;
