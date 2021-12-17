import * as React from "react";

function PlayAltSolid(props: any) {
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
      <path d="M14.823 11.708a.325.325 0 0 1 .169.292.314.314 0 0 1-.12.266L9.5 14.954a.337.337 0 0 1-.5-.293V9.339a.327.327 0 0 1 .168-.292.314.314 0 0 1 .157-.042.462.462 0 0 1 .228.068zM24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zm-7.008 7a2.332 2.332 0 0 0-1.226-2.055L10.488 7.31a2.337 2.337 0 0 0-3.5 2.029v5.322a2.313 2.313 0 0 0 1.164 2.021 2.368 2.368 0 0 0 1.186.323 2.2 2.2 0 0 0 1.1-.289l5.376-2.687A2.313 2.313 0 0 0 16.992 12z" />
    </svg>
  );
}

export default PlayAltSolid;
