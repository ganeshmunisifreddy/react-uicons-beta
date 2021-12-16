import * as React from "react";

function Cookie(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <circle cx={9.5} cy={9.5} r={1.5} />
      <circle cx={18.5} cy={1.5} r={1.5} />
      <circle cx={21.5} cy={6.5} r={1.5} />
      <circle cx={9.5} cy={14.5} r={1.5} />
      <circle cx={14.5} cy={14.5} r={1.5} />
      <path d="M23.943 10.854a1 1 0 0 0-.9-.9A10 10 0 0 1 14.048.958a1 1 0 0 0-.9-.9A11.797 11.797 0 0 0 12 0a12 12 0 1 0 12 12c0-.387-.021-.769-.057-1.146ZM12 22a10 10 0 0 1 0-20h.17A12.006 12.006 0 0 0 22 11.83V12a10.011 10.011 0 0 1-10 10Z" />
    </svg>
  );
}

export default Cookie;
