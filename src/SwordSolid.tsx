import * as React from "react";

function SwordSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M23.414.587a2.022 2.022 0 0 0-1.941-.513 16.461 16.461 0 0 0-6.479 3.983l-9.476 9.475a14.58 14.58 0 0 0-4.376-1.522 1 1 0 0 0-.286 1.979 12.632 12.632 0 0 1 5.353 2.387L2.5 20.086l-.793-.793a1 1 0 1 0-1.414 1.414l3 3a1 1 0 1 0 1.414-1.414l-.793-.793 3.709-3.71a12.609 12.609 0 0 1 2.387 5.354A1 1 0 0 0 11 24a.881.881 0 0 0 .144-.011 1 1 0 0 0 .847-1.13 14.515 14.515 0 0 0-1.522-4.376l9.475-9.476a16.52 16.52 0 0 0 4.01-6.574 1.994 1.994 0 0 0-.54-1.846z" />
    </svg>
  );
}

export default SwordSolid;
