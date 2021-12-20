import * as React from "react";

function TaxiSolid(props: any) {
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
      <path d="M15.57 2H8.43a3.993 3.993 0 0 1 3.453-2h.234a3.993 3.993 0 0 1 3.453 2Zm4.93 12H20v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2h-.5a3.492 3.492 0 0 0-.5 6.949V22a2 2 0 0 0 4 0v-1h10v1a2 2 0 0 0 4 0v-1.049a3.458 3.458 0 0 0 3-3.421v-.03a3.5 3.5 0 0 0-3.5-3.5ZM1.628 12.491A5.96 5.96 0 0 1 4 12h16a5.96 5.96 0 0 1 2.372.491l-1.544-4.972A4.974 4.974 0 0 0 16.053 4H7.947a4.974 4.974 0 0 0-4.775 3.518Z" />
    </svg>
  );
}

export default TaxiSolid;
