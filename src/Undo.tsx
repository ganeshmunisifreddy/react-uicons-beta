import * as React from "react";

function Undo(props: any) {
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
      <path d="M23 24a1 1 0 0 1-1-1 6.006 6.006 0 0 0-6-6h-5.83v1.586A2 2 0 0 1 6.756 20L.877 14.121a3 3 0 0 1 0-4.242L6.756 4a2 2 0 0 1 3.414 1.414V7H15a9.01 9.01 0 0 1 9 9v7a1 1 0 0 1-1 1ZM8.17 5.414l-5.879 5.879a1 1 0 0 0 0 1.414l5.879 5.879V16a1 1 0 0 1 1-1H16a7.984 7.984 0 0 1 6 2.714V16a7.008 7.008 0 0 0-7-7H9.17a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

export default Undo;
