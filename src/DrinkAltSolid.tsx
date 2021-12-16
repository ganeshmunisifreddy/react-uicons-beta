import * as React from "react";

function DrinkAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M11.994 10H2.362l-.306-2.444A3.021 3.021 0 0 1 5 4h7.66Zm1 9.11a1 1 0 1 1-1.988-.22l.766-6.89H2.613l.955 7.622A5.008 5.008 0 0 0 8.529 24h6.941a5.01 5.01 0 0 0 4.962-4.379L21.384 12h-7.6Zm8.64-9.11.293-2.347A3 3 0 0 0 19 4h-4.327l-.666 6ZM14.8 2.89a1 1 0 0 1 .99-.89H20a1 1 0 0 0 0-2h-4.21a3 3 0 0 0-2.981 2.669L12.661 4h2.012Z" />
    </svg>
  );
}

export default DrinkAltSolid;
