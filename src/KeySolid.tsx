import * as React from "react";

function KeySolid(props: any) {
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
      <path d="M15.989 12.7V10a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h2.685a1.016 1.016 0 0 0 .922-.6 4.522 4.522 0 0 0 .376-2.377A3.491 3.491 0 0 0 20.466 0a4.537 4.537 0 0 0-3.208 1.329L9.35 9.235a7.368 7.368 0 0 0-3.881.048A7.5 7.5 0 0 0 7.505 24a7.654 7.654 0 0 0 .784-.041 7.529 7.529 0 0 0 6.428-5.429 7.334 7.334 0 0 0 .047-3.88l.65-.65a1.984 1.984 0 0 0 .575-1.3zM5.5 20A1.5 1.5 0 1 1 7 18.5 1.5 1.5 0 0 1 5.5 20z" />
    </svg>
  );
}

export default KeySolid;
