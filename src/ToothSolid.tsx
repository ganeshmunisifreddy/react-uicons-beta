import * as React from "react";

function ToothSolid(props: any) {
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
      <path d="M18 0a12.792 12.792 0 0 0-3.915.615A7.037 7.037 0 0 1 12 1 7.037 7.037 0 0 1 9.915.615 12.8 12.8 0 0 0 6 0a5.785 5.785 0 0 0-6 6c0 6.443 3.355 12.786 5.768 16.885A2.275 2.275 0 0 0 10 21.726v-6.619a2.075 2.075 0 0 1 1.664-2.08A2 2 0 0 1 14 15v6.726a2.275 2.275 0 0 0 4.232 1.159C20.646 18.785 24 12.442 24 6a5.785 5.785 0 0 0-6-6z" />
    </svg>
  );
}

export default ToothSolid;
