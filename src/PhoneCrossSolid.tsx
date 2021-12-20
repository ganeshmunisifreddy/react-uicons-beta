import * as React from "react";

function PhoneCrossSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M23.709 7.3a1 1 0 0 1-1.418 1.41L19.5 5.915l-2.8 2.8a1 1 0 1 1-1.4-1.423L18.086 4.5l-2.795-2.793A1 1 0 1 1 16.709.3L19.5 3.088 22.3.293a1 1 0 0 1 1.406 1.417L20.914 4.5Zm-3.054 7.56a3.1 3.1 0 0 0-4.28.006l-1.906 1.606a12.781 12.781 0 0 1-6.932-6.948l1.6-1.9a3.1 3.1 0 0 0 .006-4.28S7.291.939 7.261.907A3.085 3.085 0 0 0 2.933.861l-1.149 1c-7.72 8.209 12.2 28.138 20.4 20.3l.912-1.049a3.1 3.1 0 0 0 0-4.378l-2.441-1.878Z" />
    </svg>
  );
}

export default PhoneCrossSolid;
