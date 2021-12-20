import * as React from "react";

function CommentSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M19.675 2.758A11.936 11.936 0 0 0 10.474.1 12 12 0 0 0 12.018 24H19a5.006 5.006 0 0 0 5-5v-7.754a12.044 12.044 0 0 0-4.325-8.488ZM8 7h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm8 10H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default CommentSolid;
