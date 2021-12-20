import * as React from "react";

function CommentInfoSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12.836.028A12 12 0 0 0 .029 12.855C.47 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5v-6.66A12.209 12.209 0 0 0 12.836.028ZM12 5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3Zm2 13a1 1 0 0 1-2 0v-6h-1a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

export default CommentInfoSolid;
