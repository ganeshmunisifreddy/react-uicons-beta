import * as React from "react";

function TabletSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M13 20a1 1 0 0 1-2 0v-1H2a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5h-9ZM17 0H7a5.006 5.006 0 0 0-5 5v12h20V5a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  );
}

export default TabletSolid;
