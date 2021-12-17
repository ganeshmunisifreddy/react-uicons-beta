import * as React from "react";

function Form(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M10 10a3 3 0 0 0 0 6h4a3 3 0 0 0 0-6zm5 3a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm2 6a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm2.536-15.879-1.658-1.656A4.968 4.968 0 0 0 14.343 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V6.657a4.968 4.968 0 0 0-1.464-3.536zm-1.414 1.414A3.1 3.1 0 0 1 18.5 5H16V2.5a2.932 2.932 0 0 1 .464.377zM19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6v3a2 2 0 0 0 2 2h3z" />
    </svg>
  );
}

export default Form;
