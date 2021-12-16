import * as React from "react";

function Pause(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M6.5 0A3.5 3.5 0 0 0 3 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 6.5 0ZM8 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0ZM17.5 0A3.5 3.5 0 0 0 14 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 17.5 0ZM19 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

export default Pause;