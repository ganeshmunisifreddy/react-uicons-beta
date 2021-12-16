import * as React from "react";

function MugAltSolid(props: any) {
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
      <path d="M19 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h17a1 1 0 0 1 1 1Zm5-15c0 2.774-2.185 6-5 6h-1.612l-.3 1.821A4.984 4.984 0 0 1 12.152 20h-5.3a4.984 4.984 0 0 1-4.932-4.179L.056 4.657A4 4 0 0 1 4 0h11a3.968 3.968 0 0 1 3.983 4H19c3.131 0 5 1.5 5 4Zm-2 0c0-.5 0-2-3-2h-.279l-1 6H19c1.545 0 3-2.254 3-4Z" />
    </svg>
  );
}

export default MugAltSolid;