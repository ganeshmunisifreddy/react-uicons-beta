import * as React from "react";

function InterrogationSolid(props: any) {
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
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1.93-7.494a1.982 1.982 0 0 0-.93 1.751V15a1 1 0 0 1-2 0v-.743a3.954 3.954 0 0 1 1.964-3.5 2 2 0 0 0 1-2.125 2.024 2.024 0 0 0-1.6-1.595A2 2 0 0 0 10 9a1 1 0 0 1-2 0 4 4 0 1 1 5.93 3.505Z" />
    </svg>
  );
}

export default InterrogationSolid;
