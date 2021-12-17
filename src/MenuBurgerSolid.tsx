import * as React from "react";

function MenuBurgerSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490.667 490.667"
      style={{
        enableBackground: "new 0 0 490.667 490.667",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M469.333 224h-448C9.551 224 0 233.551 0 245.333c0 11.782 9.551 21.333 21.333 21.333h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.333-21.333-21.333zM21.333 117.333h448c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551 74.667 0 84.218 0 96s9.551 21.333 21.333 21.333zM469.333 373.333h-448C9.551 373.333 0 382.885 0 394.667S9.551 416 21.333 416h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.334-21.333-21.334z" />
    </svg>
  );
}

export default MenuBurgerSolid;
