import * as React from "react";

function Golf(props: any) {
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
      <path d="M12 10a20.294 20.294 0 0 0-4.016.4l-.006-2.285 5.009-2.076a2 2 0 0 0 .271-3.4.838.838 0 0 0-.1-.065L8.9.212A2 2 0 0 0 6 2v8.914C2.391 12.109 0 14.36 0 17c0 3.925 5.271 7 12 7s12-3.075 12-7-5.271-7-12-7zm.073-5.745-4.1 1.7-.01-3.971zM12 22c-5.42 0-10-2.29-10-5 0-1.594 1.591-3.039 4-3.962V17a1 1 0 0 0 2 0l-.011-4.56A18.243 18.243 0 0 1 12 12c5.42 0 10 2.29 10 5s-4.58 5-10 5zm5-5a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default Golf;
