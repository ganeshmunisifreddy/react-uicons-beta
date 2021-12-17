import * as React from "react";

function CampingSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12.887 16.573 16.451 24H7.188l3.933-7.438a.971.971 0 0 1 1.766.011Zm10.635.295L16.535 2.9a5 5 0 0 0-9.057-.026L.47 16.9A4.995 4.995 0 0 0 4.929 24l4.4-8.322a2.97 2.97 0 0 1 5.366.047L18.669 24H19a5 5 0 0 0 4.522-7.132Z" />
    </svg>
  );
}

export default CampingSolid;
