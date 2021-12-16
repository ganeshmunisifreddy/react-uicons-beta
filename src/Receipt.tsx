import * as React from "react";

function Receipt(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 0H8a5.006 5.006 0 0 0-5 5v18a1 1 0 0 0 1.564.825l2.106-1.439 2.106 1.439a1 1 0 0 0 1.13 0l2.1-1.439 2.1 1.439a1 1 0 0 0 1.131 0l2.1-1.438 2.1 1.437A1 1 0 0 0 21 23V5a5.006 5.006 0 0 0-5-5Zm3 21.1-1.1-.752a1 1 0 0 0-1.132 0l-2.1 1.439-2.1-1.439a1 1 0 0 0-1.131 0l-2.1 1.439-2.1-1.439a1 1 0 0 0-1.129 0L5 21.1V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z" />
      <rect x={7} y={8} width={10} height={2} rx={1} />
      <rect x={7} y={12} width={8} height={2} rx={1} />
    </svg>
  );
}

export default Receipt;
