import * as React from "react";

function CrownSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M22.766 4.566a1.994 1.994 0 0 0-2.18.434L18 7.586 13.414 3a2 2 0 0 0-2.828 0L6 7.586 3.414 5A2 2 0 0 0 0 6.414V17a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6.414a2 2 0 0 0-1.234-1.848Z" />
    </svg>
  );
}

export default CrownSolid;
