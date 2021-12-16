import * as React from "react";

function UserTimeSolid(props: any) {
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
      <path d="M17 10a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7zm2.707 9.707a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 16 17v-3a1 1 0 0 1 2 0v2.586l1.707 1.707a1 1 0 0 1 0 1.414zM8.474 11a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5zm2.882 13H1a1 1 0 0 1-1-1.011 10.275 10.275 0 0 1 6.553-9.6 6.685 6.685 0 0 1 2.394-.384 9.087 9.087 0 0 0-.424.995A8.853 8.853 0 0 0 8 17a8.983 8.983 0 0 0 3.356 7z" />
    </svg>
  );
}

export default UserTimeSolid;
