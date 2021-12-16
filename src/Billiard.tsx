import * as React from "react";

function Billiard(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm0-14a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6zm-.143 9.515 3-5A1 1 0 0 0 14 9h-4a1 1 0 0 0 0 2h2.234l-2.091 3.485a1 1 0 1 0 1.714 1.03z" />
    </svg>
  );
}

export default Billiard;
