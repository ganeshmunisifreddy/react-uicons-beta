import * as React from "react";

function BookAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M22.2 2.163a5 5 0 0 0-4.157-1.069l-1.764.432A4 4 0 0 0 13 5.461v15.467a6.909 6.909 0 0 1-2 0V5.461a3.981 3.981 0 0 0-3.226-3.923L5.9 1.082A5 5 0 0 0 0 6v10.793a5 5 0 0 0 4.105 4.919l6.286 1.143a9 9 0 0 0 3.218 0l6.291-1.143a5 5 0 0 0 4.1-4.919V6a4.983 4.983 0 0 0-1.8-3.837z" />
    </svg>
  );
}

export default BookAltSolid;
