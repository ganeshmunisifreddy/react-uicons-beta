import * as React from "react";

function Layers(props: any) {
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
      <path d="M22.485 10.975 12 17.267 1.515 10.975A1 1 0 1 0 .486 12.69l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715Z" />
      <path d="M22.485 15.543 12 21.834 1.515 15.543a1 1 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715ZM12 14.773a2.976 2.976 0 0 1-1.531-.425L.485 8.357a1 1 0 0 1 0-1.714L10.469.652a2.973 2.973 0 0 1 3.062 0l9.984 5.991a1 1 0 0 1 0 1.714l-9.984 5.991a2.976 2.976 0 0 1-1.531.425ZM2.944 7.5l8.556 5.133a.974.974 0 0 0 1 0L21.056 7.5 12.5 2.367a.974.974 0 0 0-1 0Z" />
    </svg>
  );
}

export default Layers;
