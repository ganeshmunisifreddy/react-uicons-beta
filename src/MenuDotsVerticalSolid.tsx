import * as React from "react";

function MenuDotsVerticalSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <circle cx={256} cy={42.667} r={42.667} />
      <circle cx={256} cy={256} r={42.667} />
      <circle cx={256} cy={469.333} r={42.667} />
    </svg>
  );
}

export default MenuDotsVerticalSolid;
