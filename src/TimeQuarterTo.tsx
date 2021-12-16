import * as React from "react";

function TimeQuarterTo(props: any) {
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
      <path d="M24 12a12 12 0 0 1-24 0 1 1 0 0 1 2 0A10 10 0 1 0 12 2a1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12zm-13.723-1H8a1 1 0 0 0 0 2h2.277A1.994 1.994 0 1 0 13 10.277V7a1 1 0 0 0-2 0v3.277a2 2 0 0 0-.723.723zm-8.45-2.216a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm2.394-3.577a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm3.558-2.366a1 1 0 1 0-1-1 1 1 0 0 0 1 1z" />
    </svg>
  );
}

export default TimeQuarterTo;