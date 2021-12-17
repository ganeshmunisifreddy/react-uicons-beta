import * as React from "react";

function Drumstick(props: any) {
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
      <path d="M21.5 2.5a8.578 8.578 0 0 0-12.075 0c-2.377 2.377-3.157 7.909-3.41 11a4.164 4.164 0 0 0 .585 2.483l-3.8 3.8a1.5 1.5 0 1 0-.649 2.063 1.5 1.5 0 1 0 2.063-.649l3.8-3.8a4.136 4.136 0 0 0 2.484.592c3.086-.253 8.617-1.032 11-3.41A8.577 8.577 0 0 0 21.5 2.5Zm-1.415 10.662c-1.387 1.385-5.029 2.444-9.744 2.831a2.156 2.156 0 0 1-2.334-2.334c.387-4.715 1.446-8.359 2.831-9.744a6.539 6.539 0 1 1 9.247 9.247Z" />
    </svg>
  );
}

export default Drumstick;
