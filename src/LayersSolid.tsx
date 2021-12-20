import * as React from "react";

function LayersSolid(props: any) {
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
      <path d="M22.485 10.975 12 17.267 1.515 10.975A1 1 0 1 0 .486 12.69l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715Z" />
      <path d="M22.485 15.543 12 21.834 1.515 15.543a1 1 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715ZM.485 8.357l9.984 5.991a2.97 2.97 0 0 0 3.062 0l9.984-5.991a1 1 0 0 0 0-1.714L13.531.652a2.973 2.973 0 0 0-3.062 0L.485 6.643a1 1 0 0 0 0 1.714Z" />
    </svg>
  );
}

export default LayersSolid;
