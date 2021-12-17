import * as React from "react";

function FilmSolid(props: any) {
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
      <path d="M19.051 0h-14a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm1 11h2v2h-2zm0-2V7h2v2zm-16 4h-2v-2h2zM6 13v-2h12v2zM4.051 9h-2V7h2zm-2 6h2v2h-2zm18 0h2v2h-2zm2-10h-2V2.184a3 3 0 0 1 2 2.816zm-18-2.816V5h-2a3 3 0 0 1 2-2.816zM2.051 19h2v2.816a3 3 0 0 1-2-2.816zm18 2.816V19h2a3 3 0 0 1-2 2.816z" />
    </svg>
  );
}

export default FilmSolid;
