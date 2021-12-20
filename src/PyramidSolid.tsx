import * as React from "react";

function PyramidSolid(props: any) {
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
      <path
        d="M20.036 24H3.964a3.955 3.955 0 0 1-3.542-5.733L8.459 2.189A3.932 3.932 0 0 1 11.736.008a3.977 3.977 0 0 1 3.805 2.181l8.037 16.078A3.961 3.961 0 0 1 20.036 24Z"
        data-name="Capa 13"
      />
    </svg>
  );
}

export default PyramidSolid;
