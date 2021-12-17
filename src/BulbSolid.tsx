import * as React from "react";

function BulbSolid(props: any) {
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
      <path d="M5.868 15.583a8.938 8.938 0 0 1-2.793-7.761 9 9 0 1 1 14.857 7.941A5.741 5.741 0 0 0 16.338 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 2 2.816V18H7.563a6.839 6.839 0 0 0-1.695-2.417zM8 20v.31A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31V20z" />
    </svg>
  );
}

export default BulbSolid;
