import * as React from "react";

function VenusDoubleSolid(props: any) {
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
      <path d="M11 20a1 1 0 0 1-1 1H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 0 1 0-2h2v-4.151A7.5 7.5 0 1 1 10.124.478a9.454 9.454 0 0 0 0 14.044A7.521 7.521 0 0 1 8 14.977V19h2a1 1 0 0 1 1 1ZM24 7.5a7.5 7.5 0 1 0-8 7.475V19h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-4.151A7.513 7.513 0 0 0 24 7.5Z" />
    </svg>
  );
}

export default VenusDoubleSolid;
