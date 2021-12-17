import * as React from "react";

function CocktailSolid(props: any) {
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
      <path d="M24.009 4H-.009A4.012 4.012 0 0 1 4 0h16a4.012 4.012 0 0 1 4.009 4Zm-.555 2H.534A13.814 13.814 0 0 0 11 11.965V22H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4V11.965A13.8 13.8 0 0 0 23.454 6Z" />
    </svg>
  );
}

export default CocktailSolid;
