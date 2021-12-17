import * as React from "react";

function Scale(props: any) {
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
      <path d="M19 2h-2.539A5.905 5.905 0 0 0 10.8.117 5.757 5.757 0 0 0 7.589 2H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5Zm-7 0a4 4 0 0 1 4 4 1 1 0 0 1-1 1h-2.132l.964-1.445a1 1 0 0 0-1.664-1.11L10.465 7H9a1 1 0 0 1-1-1 4 4 0 0 1 4-4Zm10 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.393A6.482 6.482 0 0 0 6 6.215 2.788 2.788 0 0 0 8.785 9h6.43A2.762 2.762 0 0 0 18 6.353 7.568 7.568 0 0 0 17.656 4H19a3 3 0 0 1 3 3Z" />
    </svg>
  );
}

export default Scale;
