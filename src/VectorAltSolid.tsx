import * as React from "react";

function VectorAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M21 16v-4a8.983 8.983 0 0 0-3.356-7h2.633a1.991 1.991 0 1 0-.009-2h-4.41a3.981 3.981 0 0 0-7.716 0H3.723a1.991 1.991 0 1 0 .009 2h2.624A8.983 8.983 0 0 0 3 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3v-4a7 7 0 0 1 3.521-6.065 3.963 3.963 0 0 0 6.958 0A7 7 0 0 1 19 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
    </svg>
  );
}

export default VectorAltSolid;
