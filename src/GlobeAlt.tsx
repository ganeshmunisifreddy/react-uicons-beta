import * as React from "react";

function GlobeAlt(props: any) {
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
      <path d="M13 16a8 8 0 1 0-8-8 8.009 8.009 0 0 0 8 8zm0-14a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6zm9.907 12.773A11.992 11.992 0 0 1 14 19.939V22h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4v-2.051A11.994 11.994 0 0 1 3.743.363a1 1 0 0 1 1.542 1.274 10 10 0 1 0 15.971 12.006 1 1 0 0 1 1.651 1.13z" />
    </svg>
  );
}

export default GlobeAlt;
