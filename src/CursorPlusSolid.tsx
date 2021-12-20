import * as React from "react";

function CursorPlusSolid(props: any) {
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
      <path d="M16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm3 9h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2zM5 12h-.019a1 1 0 0 1-.891-.586L.146 2.739A2.011 2.011 0 0 1 .588.588 1.99 1.99 0 0 1 2.649.109a.893.893 0 0 1 .09.037l8.675 3.944a1 1 0 0 1 .033 1.8l-3.7 1.85-1.85 3.7A1 1 0 0 1 5 12z" />
    </svg>
  );
}

export default CursorPlusSolid;
