import * as React from "react";

function CloudDownloadSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M18.357 7.361a1.087 1.087 0 0 1-.722-.733 8 8 0 0 0-15.49.842 7.648 7.648 0 0 0 .8 5.179A5.448 5.448 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23h9.1c5.073 0 8.851-3.027 9.189-7.362a7.96 7.96 0 0 0-5.615-8.277zm.308 11.386-1.586 1.414a2.9 2.9 0 0 1-2.064.839 3.013 3.013 0 0 1-2.136-.882l-1.544-1.374a1 1 0 0 1 1.33-1.494L14 18.444V11a1 1 0 0 1 2 0v7.445l1.335-1.192a1 1 0 0 1 1.33 1.494z" />
    </svg>
  );
}

export default CloudDownloadSolid;
