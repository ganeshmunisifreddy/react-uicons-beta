import * as React from "react";

function CommentHeartSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 10.7c0 1.5-2.259 3.732-4 5.062-1.741-1.33-4-3.56-4-5.062-.076-2.006 2.913-2.4 3-.246V11a1 1 0 0 0 2 0v-.546c.087-2.154 3.076-1.76 3 .246Zm8 1.64V19a5.007 5.007 0 0 1-5 5h-5.916C6.082 24 .47 19.208.029 12.855A12 12 0 0 1 12.836.028 12.209 12.209 0 0 1 24 12.34Zm-6-1.64a3.567 3.567 0 0 0-6-2.71 3.567 3.567 0 0 0-6 2.71c0 3.256 4.874 6.736 5.43 7.122a1 1 0 0 0 1.14 0c.556-.386 5.43-3.866 5.43-7.122Z" />
    </svg>
  );
}

export default CommentHeartSolid;