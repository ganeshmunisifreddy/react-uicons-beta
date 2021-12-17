import * as React from "react";

function GolfSolid(props: any) {
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
      <path d="M12 10a21.7 21.7 0 0 0-2 .1V17a1 1 0 0 1-2 0l-.022-8.885 5.009-2.076a2 2 0 0 0 .271-3.4C13.226 2.61 8.9.212 8.9.212A2 2 0 0 0 6 2v8.922C2.392 12.115 0 14.361 0 17c0 3.925 5.271 7 12 7s12-3.075 12-7-5.271-7-12-7zm4 9a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
    </svg>
  );
}

export default GolfSolid;
