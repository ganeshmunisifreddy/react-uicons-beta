import * as React from "react";

function MarsDoubleSolid(props: any) {
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
      <path d="M14 11a6.953 6.953 0 0 0-1.4-4.184l3.4-3.4V5a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2h-3a1 1 0 0 0 0 2h1.586l-3.4 3.4A6.991 6.991 0 1 0 14 11Z" />
      <path d="M22 6h-3a1 1 0 0 0 0 2h1.586l-3.413 3.413a6.975 6.975 0 0 0-1.189-.736c0 .108.016.214.016.323a9.01 9.01 0 0 1-9 9c-.109 0-.215-.013-.323-.016A6.994 6.994 0 0 0 20 17a6.923 6.923 0 0 0-1.411-4.175L22 9.414V11a1 1 0 0 0 2 0V8a2 2 0 0 0-2-2Z" />
    </svg>
  );
}

export default MarsDoubleSolid;
