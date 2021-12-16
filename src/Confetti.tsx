import * as React from "react";

function Confetti(props: any) {
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
      <circle cx={5} cy={13} r={1} />
      <circle cx={1} cy={9} r={1} />
      <circle cx={5} cy={5} r={1} />
      <circle cx={1} cy={1} r={1} />
      <circle cx={23} cy={13} r={1} />
      <circle cx={19} cy={9} r={1} />
      <circle cx={23} cy={5} r={1} />
      <circle cx={19} cy={1} r={1} />
      <circle cx={14} cy={23} r={1} />
      <circle cx={10} cy={19} r={1} />
      <circle cx={14} cy={15} r={1} />
      <circle cx={10} cy={11} r={1} />
      <path d="M15 3a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM7 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM23 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default Confetti;
