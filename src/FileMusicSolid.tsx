import * as React from "react";

function FileMusicSolid(props: any) {
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
      <path d="M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15a1 1 0 0 1-1-1zm7.976 3H15a3 3 0 0 1-3-3V.024C11.839.013 11.678 0 11.515 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515c0-.163-.013-.324-.024-.485zM14 14h-1v4.5a2.5 2.5 0 1 1-2.5-2.5 2.577 2.577 0 0 1 .5.05V14a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default FileMusicSolid;
