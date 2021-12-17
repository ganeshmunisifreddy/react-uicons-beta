import * as React from "react";

function StatsSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M5.5 21A2.5 2.5 0 0 1 3 18.5v-17A1.5 1.5 0 0 0 1.5 0 1.5 1.5 0 0 0 0 1.5v17A5.5 5.5 0 0 0 5.5 24h17a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5Z" />
      <path d="M19.5 18a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-3 0v6a1.5 1.5 0 0 0 1.5 1.5ZM7.5 18A1.5 1.5 0 0 0 9 16.5v-6a1.5 1.5 0 0 0-3 0v6A1.5 1.5 0 0 0 7.5 18ZM13.5 18a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11a1.5 1.5 0 0 0 1.5 1.5Z" />
    </svg>
  );
}

export default StatsSolid;
