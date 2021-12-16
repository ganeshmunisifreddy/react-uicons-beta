import * as React from "react";

function RhombusSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="m22.466 8.465-6.93-6.931a5.008 5.008 0 0 0-7.072 0l-6.93 6.931a5 5 0 0 0 0 7.07l6.93 6.931a5.007 5.007 0 0 0 7.072 0l6.93-6.931a5 5 0 0 0 0-7.07Z" />
    </svg>
  );
}

export default RhombusSolid;
