import * as React from "react";

function RaindropsSolid(props: any) {
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
      <path d="M13 24a6.006 6.006 0 0 1-6-6c0-1.56 1.2-4.045 3.552-7.388a3.016 3.016 0 0 1 4.9 0C17.805 13.955 19 16.44 19 18a6.006 6.006 0 0 1-6 6ZM5 11a5.006 5.006 0 0 1-5-5c0-1.26.842-2.855 2.574-4.877a3.2 3.2 0 0 1 4.852 0C9.158 3.143 10 4.738 10 6a5.006 5.006 0 0 1-5 5ZM19.5 9.964a4.505 4.505 0 0 1-4.5-4.5c0-1.091.7-2.506 2.146-4.326a3.02 3.02 0 0 1 4.708 0C23.3 2.958 24 4.373 24 5.464a4.505 4.505 0 0 1-4.5 4.5Z" />
    </svg>
  );
}

export default RaindropsSolid;
