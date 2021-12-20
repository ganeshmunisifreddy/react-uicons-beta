import * as React from "react";

function BilliardSolid(props: any) {
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
      <path d="M12 6a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6zm2.857 4.515-3 5a1 1 0 1 1-1.714-1.03L12.234 11H10a1 1 0 0 1 0-2h4a1 1 0 0 1 .857 1.515zM12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 20a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
    </svg>
  );
}

export default BilliardSolid;
