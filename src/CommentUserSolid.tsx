import * as React from "react";

function CommentUserSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M256 169.515c17.944 0 32.491-14.547 32.491-32.491S273.944 104.533 256 104.533s-32.491 14.547-32.491 32.491 14.547 32.491 32.491 32.491z" />
      <path d="M426.667.016H85.333C37.894.391-.284 39.104 0 86.544V346.17c-.284 47.443 37.891 86.162 85.333 86.549h62.357l79.957 68.267c15.838 14.474 40.039 14.686 56.128.491l82.027-68.779h60.864c47.442-.387 85.617-39.106 85.333-86.549V86.544c.285-47.44-37.893-86.153-85.332-86.528zM256 64.912c98.453 2.603 98.432 148.843 0 151.467-98.453-2.625-98.432-148.801 0-151.467zm90.645 302.208c-11.416 2.913-23.032-3.981-25.945-15.397l-.039-.155c-10.919-35.717-48.726-55.82-84.443-44.901a67.628 67.628 0 0 0-44.901 44.901c-2.981 11.405-14.643 18.234-26.048 15.253-11.405-2.981-18.234-14.643-15.253-26.048 16.496-58.539 77.324-92.622 135.863-76.126a110.123 110.123 0 0 1 76.126 76.126c2.97 11.508-3.882 23.261-15.36 26.347z" />
    </svg>
  );
}

export default CommentUserSolid;
