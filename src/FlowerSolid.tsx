import * as React from "react";

function FlowerSolid(props: any) {
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
      <path d="M20.8 12c4.939-2.989.773-10.453-4.4-7.632-.173-5.774-8.629-5.771-8.8 0-5.133-2.817-9.362 4.618-4.4 7.576-4.949 3.035-.8 10.211 4.4 7.692.18 5.77 8.622 5.765 8.8 0C21.562 22.153 25.772 15 20.8 12ZM12 16a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm2-4a2 2 0 0 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
}

export default FlowerSolid;
