import * as React from "react";

function PharmacySolid(props: any) {
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
      <path d="M12 24a4 4 0 0 1-4-4v-4H4a4 4 0 0 1 0-8h4V4a4 4 0 0 1 8 0v4h4a4 4 0 0 1 0 8h-4v4a4 4 0 0 1-4 4z" />
    </svg>
  );
}

export default PharmacySolid;
