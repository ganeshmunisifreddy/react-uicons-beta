import * as React from "react";

function CreditCardSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M19 3H5a5.006 5.006 0 0 0-5 5h24a5.006 5.006 0 0 0-5-5ZM0 16a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-6H0Zm7-.5A1.5 1.5 0 1 1 5.5 14 1.5 1.5 0 0 1 7 15.5" />
    </svg>
  );
}

export default CreditCardSolid;
