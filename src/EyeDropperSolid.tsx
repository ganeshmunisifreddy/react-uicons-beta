import * as React from "react";

function EyeDropperSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M20.678 7.393c-.916.916-.707 2.838.025 4.167a2.489 2.489 0 0 1-3.961 2.924L9.516 7.258A2.489 2.489 0 0 1 12.44 3.3c1.329.731 3.251.941 4.167.025L19.086.843a2.947 2.947 0 0 1 4.071 0 2.88 2.88 0 0 1 0 4.075zM1.969 17.347a3.307 3.307 0 0 0-.585 3.853L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L2.8 22.616a3.264 3.264 0 0 0 3.855-.586l7.4-7.4-4.682-4.686z" />
    </svg>
  );
}

export default EyeDropperSolid;
