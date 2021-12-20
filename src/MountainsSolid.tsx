import * as React from "react";

function MountainsSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M20 8a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm1.452 16h-8.863a2.548 2.548 0 0 1-2.221-1.26 2.463 2.463 0 0 1-.029-2.471l4.436-7.959a2.6 2.6 0 0 1 4.5 0l4.425 7.953a2.468 2.468 0 0 1-.028 2.475A2.551 2.551 0 0 1 21.452 24Zm-12.808-.246a4.45 4.45 0 0 1-.053-4.454l4.437-7.96a4.519 4.519 0 0 1 1.507-1.605l-1.591-2.98a3.344 3.344 0 0 0-5.885 0l-6.653 12.3A3.351 3.351 0 0 0 3.35 24H8.8a3.925 3.925 0 0 1-.156-.246Z" />
    </svg>
  );
}

export default MountainsSolid;
