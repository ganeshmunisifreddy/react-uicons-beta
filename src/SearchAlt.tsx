import * as React from "react";

function SearchAlt(props: any) {
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
      <path d="M16 6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm7.707 17.707a1 1 0 0 1-1.414 0L19.886 21.3a4.457 4.457 0 0 1-2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1-.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414zM17.5 20a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zM13 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v8a1 1 0 0 0 2 0V3a3 3 0 0 0-3-3H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a1 1 0 0 0 0-2z" />
    </svg>
  );
}

export default SearchAlt;
