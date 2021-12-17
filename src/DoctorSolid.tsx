import * as React from "react";

function DoctorSolid(props: any) {
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
      <path d="M19 5h-3V4a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0-5-5zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm5 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default DoctorSolid;
