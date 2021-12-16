import * as React from "react";

function PlusSolid(props: any) {
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
      {...props}
    >
      <path d="M490.667 234.667H277.333V21.333C277.333 9.551 267.782 0 256 0c-11.782 0-21.333 9.551-21.333 21.333v213.333H21.333C9.551 234.667 0 244.218 0 256s9.551 21.333 21.333 21.333h213.333v213.333c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333V277.333h213.333c11.782 0 21.333-9.551 21.333-21.333.002-11.782-9.549-21.333-21.331-21.333z" />
    </svg>
  );
}

export default PlusSolid;
