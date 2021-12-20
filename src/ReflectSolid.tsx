import * as React from "react";

function ReflectSolid(props: any) {
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
      <path d="M23 13H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2zm-4.066-5.874a2.427 2.427 0 0 0-1.284-2.731L9.668.428A3.3 3.3 0 0 0 6.4.433 2.809 2.809 0 0 0 5 2.914V6a3 3 0 0 0 3 3h8.318a2.538 2.538 0 0 0 2.616-1.874zM9.628 23.592l8.033-3.992a2.425 2.425 0 0 0 1.273-2.726A2.538 2.538 0 0 0 16.318 15H8a3 3 0 0 0-3 3v3.085a2.808 2.808 0 0 0 1.4 2.481A3.212 3.212 0 0 0 8.032 24a3.287 3.287 0 0 0 1.596-.408z" />
    </svg>
  );
}

export default ReflectSolid;
