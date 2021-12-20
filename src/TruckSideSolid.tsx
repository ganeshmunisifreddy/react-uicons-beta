import * as React from "react";

function TruckSideSolid(props: any) {
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
      <path d="M15 18H4a4 4 0 0 1-4-4V6a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5Zm9-7v-1a5 5 0 0 0-5-5h-2v6Zm-7 2v5h3a4 4 0 0 0 4-4v-1ZM4.058 20a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0-.058-.5Zm11 0a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0-.058-.5Z" />
    </svg>
  );
}

export default TruckSideSolid;
