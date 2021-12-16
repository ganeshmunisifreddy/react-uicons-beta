import * as React from "react";

function ProtractorSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M21.977 11.264C21.613 5.724 16.474 1.041 10.731 1A2 2 0 0 0 9 0H7a4 4 0 0 0-4 4v1h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v1a4 4 0 0 0 4 4h2a2 2 0 0 0 1.731-1H11a11.041 11.041 0 0 0 8.028-3.481 10.915 10.915 0 0 0 2.949-8.255zm-11.03 4.725A1 1 0 0 1 10 15V9a1 1 0 0 1 1-1 4 4 0 0 1 3.981 4.393 4.1 4.1 0 0 1-4.034 3.596z" />
    </svg>
  );
}

export default ProtractorSolid;
