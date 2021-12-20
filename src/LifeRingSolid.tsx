import * as React from "react";

function LifeRingSolid(props: any) {
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
      <path d="M7 12a4.969 4.969 0 0 1 .833-2.753L2.845 4.259a11.954 11.954 0 0 0 0 15.482l4.988-4.988A4.969 4.969 0 0 1 7 12ZM21.155 4.259l-4.988 4.988a4.966 4.966 0 0 1 0 5.506l4.988 4.988a11.954 11.954 0 0 0 0-15.482ZM12 17a4.969 4.969 0 0 1-2.753-.833l-4.988 4.988a11.954 11.954 0 0 0 15.482 0l-4.988-4.988A4.969 4.969 0 0 1 12 17ZM12 7a4.969 4.969 0 0 1 2.753.833l4.988-4.988a11.954 11.954 0 0 0-15.482 0l4.988 4.988A4.969 4.969 0 0 1 12 7Z" />
    </svg>
  );
}

export default LifeRingSolid;
