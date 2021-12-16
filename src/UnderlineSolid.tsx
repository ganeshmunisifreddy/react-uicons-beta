import * as React from "react";

function UnderlineSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 20a8.009 8.009 0 0 0 8-8V1a1 1 0 0 0-2 0v11a6 6 0 0 1-12 0V1a1 1 0 0 0-2 0v11a8.009 8.009 0 0 0 8 8ZM23 22H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default UnderlineSolid;