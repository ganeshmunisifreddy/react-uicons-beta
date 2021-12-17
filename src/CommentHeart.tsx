import * as React from "react";

function CommentHeart(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M14.5 7a3.514 3.514 0 0 0-2.5.99 3.567 3.567 0 0 0-6 2.71c0 3.256 4.874 6.736 5.43 7.121a1 1 0 0 0 1.14 0c.556-.385 5.43-3.865 5.43-7.121A3.608 3.608 0 0 0 14.5 7ZM12 15.762c-1.741-1.33-4-3.56-4-5.062-.076-2.006 2.913-2.4 3-.246V11a1 1 0 0 0 2 0v-.546c.087-2.152 3.076-1.76 3 .246 0 1.5-2.259 3.732-4 5.062ZM12.836.028A12 12 0 0 0 .03 12.854C.47 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5v-6.66A12.21 12.21 0 0 0 12.836.028ZM22 19a3 3 0 0 1-3 3h-5.917C7.049 22 2.4 18.1 2.025 12.716A10 10 0 0 1 12.7 2.024 10.2 10.2 0 0 1 22 12.34Z" />
    </svg>
  );
}

export default CommentHeart;
