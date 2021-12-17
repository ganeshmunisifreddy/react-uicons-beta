import * as React from "react";

function SoapSolid(props: any) {
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
      <path d="M16 17a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm6 0v1a6.006 6.006 0 0 1-6 6H8a6.006 6.006 0 0 1-6-6v-1a8.942 8.942 0 0 1 4.928-8h10.144A8.942 8.942 0 0 1 22 17zm-4 0a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 0 3-3zM17 6a2 2 0 0 0-2-2V2h4a1 1 0 0 0 0-2h-7a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v1h10z" />
    </svg>
  );
}

export default SoapSolid;
