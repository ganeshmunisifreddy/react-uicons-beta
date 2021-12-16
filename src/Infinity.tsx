import * as React from "react";

function Infinity(props: any) {
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
      <path d="M18 6c-2.972 0-4.943 2.227-6 3.882C10.943 8.227 8.972 6 6 6a6 6 0 0 0 0 12c2.972 0 4.943-2.227 6-3.882C13.057 15.773 15.028 18 18 18a6 6 0 0 0 0-12zM6 16a4 4 0 0 1 0-8c2.693 0 4.382 2.945 4.9 4-.514 1.06-2.192 4-4.9 4zm12 0c-2.693 0-4.382-2.945-4.9-4 .515-1.058 2.193-4 4.9-4a4 4 0 0 1 0 8z" />
    </svg>
  );
}

export default Infinity;