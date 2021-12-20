import * as React from "react";

function SchoolSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M4.343 11H0a5.006 5.006 0 0 1 5-5h6V1.636A1.637 1.637 0 0 1 13.33.154l3.2 1.5a1 1 0 0 1 0 1.7L13 5v1h6a5.006 5.006 0 0 1 5 5h-4.343a3 3 0 0 1-2.092-.849l-2.736-2.979a4.074 4.074 0 0 0-5.687.03l-2.678 2.919A3.017 3.017 0 0 1 4.343 11zM12 19a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1zm7.657-6H24v8a3 3 0 0 1-3 3h-6v-4a3 3 0 0 0-6 0v4H3a3 3 0 0 1-3-3v-8h4.343a4.994 4.994 0 0 0 3.565-1.495l2.678-2.919a2.07 2.07 0 0 1 2.8-.03l2.738 2.979A4.968 4.968 0 0 0 19.657 13zM6 21a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm0-4a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm8-4a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm7 8a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm-1-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z" />
    </svg>
  );
}

export default SchoolSolid;
