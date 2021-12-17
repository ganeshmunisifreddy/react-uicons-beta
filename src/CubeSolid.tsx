import * as React from "react";

function CubeSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M14.762 11.587a5.5 5.5 0 0 1-1.762.636v11.651a4.922 4.922 0 0 0 1.5-.557l6.027-3.479a5.016 5.016 0 0 0 2.5-4.331v-6.96a4.959 4.959 0 0 0-.265-1.57ZM10.242 9.857a3.531 3.531 0 0 0 3.521 0l8-4.61a4.983 4.983 0 0 0-1.238-1.027L14.5.737a5.015 5.015 0 0 0-5 0l-6.027 3.48a4.974 4.974 0 0 0-1.2.983ZM11 12.223a5.493 5.493 0 0 1-1.763-.636l-7.98-4.664a4.956 4.956 0 0 0-.284 1.624v6.96a5.016 5.016 0 0 0 2.5 4.331L9.5 23.317a4.922 4.922 0 0 0 1.5.557Z" />
    </svg>
  );
}

export default CubeSolid;
