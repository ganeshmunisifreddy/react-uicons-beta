import * as React from "react";

function Protractor(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M21.977 11.264C21.613 5.724 16.474 1.041 10.731 1A2 2 0 0 0 9 0H7a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h2a2 2 0 0 0 1.731-1H11a11.041 11.041 0 0 0 8.028-3.481 10.915 10.915 0 0 0 2.949-8.255Zm-4.409 6.887A8.911 8.911 0 0 1 11 21h-1a1 1 0 0 0-1 1H7a2 2 0 0 1-2-2v-1h1a1 1 0 0 0 0-2H5v-2h1a1 1 0 0 0 0-2H5v-2h1a1 1 0 0 0 0-2H5V7h1a1 1 0 0 0 0-2H5V4a2 2 0 0 1 2-2h2a1 1 0 0 0 1 1h.656c4.757 0 9.027 3.844 9.324 8.394a8.925 8.925 0 0 1-2.412 6.757ZM11 7a2 2 0 0 0-2 2v6a2.013 2.013 0 0 0 1.976 1.989 5.09 5.09 0 0 0 5-4.5A5 5 0 0 0 11 7Zm0 8V9a3 3 0 0 1 2.986 3.3A3.089 3.089 0 0 1 11 15Z" />
    </svg>
  );
}

export default Protractor;
