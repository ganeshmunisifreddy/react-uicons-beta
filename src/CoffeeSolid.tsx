import * as React from "react";

function CoffeeSolid(props: any) {
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
      <path d="M23 4a2 2 0 0 1-2 2H3a2 2 0 0 1 0-4h1.184A3 3 0 0 1 7 0h10a3 3 0 0 1 2.816 2H21a2 2 0 0 1 2 2ZM10 16c.105 3.954 3.895 3.953 4 0-.1-3.954-3.895-3.953-4 0Zm-1.919-1c.892-5.287 6.948-5.284 7.838 0h5.088l.735-5.876A1 1 0 0 0 20.75 8H3.25a1 1 0 0 0-.992 1.124L2.992 15Zm7.838 2c-.892 5.287-6.947 5.284-7.838 0H3.242l.328 2.62A5.008 5.008 0 0 0 8.531 24h6.938a5.008 5.008 0 0 0 4.961-4.38l.327-2.62Z" />
    </svg>
  );
}

export default CoffeeSolid;
