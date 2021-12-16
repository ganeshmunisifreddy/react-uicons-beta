import * as React from "react";

function AsterikSolid(props: any) {
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
      <path d="M21.5 14.119 18.017 12 21.5 9.881a3.181 3.181 0 1 0-3.362-5.4L15 6.49V3a3 3 0 0 0-6 0v3.588L5.862 4.481a3.181 3.181 0 0 0-3.362 5.4L5.983 12 2.5 14.119a3.181 3.181 0 0 0 3.362 5.4L9 17.481V21a3 3 0 0 0 6 0v-3.58l3.138 2.1a3.181 3.181 0 0 0 3.362-5.4z" />
    </svg>
  );
}

export default AsterikSolid;
