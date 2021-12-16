import * as React from "react";

function CheeseSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M24 11.507A5.951 5.951 0 0 0 23.8 10H2.673a1.977 1.977 0 0 0-1.789 1.13C-.647 14.839-.531 23.92 4.833 24h2.93a1.5 1.5 0 0 0 1.412-1.01 3.014 3.014 0 0 1 5.65 0A1.5 1.5 0 0 0 16.237 24H18.8a5.048 5.048 0 0 0 5.2-5ZM7 17a2 2 0 0 1 0-4 2 2 0 0 1 0 4Zm11 2a2 2 0 0 1 0-4 2 2 0 0 1 0 4Zm4.853-11H2.673a4.031 4.031 0 0 0-.53.039A20.209 20.209 0 0 1 8.043.96a4.961 4.961 0 0 1 5.708-.112l4.2 3.132 3.638 2.72A5.968 5.968 0 0 1 22.853 8Z" />
    </svg>
  );
}

export default CheeseSolid;
