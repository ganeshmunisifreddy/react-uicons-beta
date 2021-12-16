import * as React from "react";

function PizzaSliceSolid(props: any) {
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
      <path d="M16.424 21.974a4.943 4.943 0 0 1-5.176 1.874A15.857 15.857 0 0 1 .153 12.753a4.937 4.937 0 0 1 1.874-5.169 14.429 14.429 0 0 0 14.397 14.39Zm7.408-18.3L17.4 20H17A12.574 12.574 0 0 1 4 7v-.4L20.3.178a2.749 2.749 0 0 1 3.532 3.495ZM12 10a2 2 0 0 0-4 0 2 2 0 0 0 4 0Zm6.122 2.716 2.554-6.486c-4.26-1.492-6.618 4.676-2.554 6.486Z" />
    </svg>
  );
}

export default PizzaSliceSolid;
