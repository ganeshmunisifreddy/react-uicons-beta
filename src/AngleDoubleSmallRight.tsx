import * as React from "react";

function AngleDoubleSmallRight(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M13.1 19a1 1 0 0 1-.7-1.71l4.6-4.58a1 1 0 0 0 0-1.42l-4.6-4.58a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l4.59 4.59a3 3 0 0 1 0 4.24l-4.59 4.59a1 1 0 0 1-.71.29Z" />
      <path d="M6.1 19a1 1 0 0 1-.7-1.71L10.69 12 5.4 6.71a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l6 6a1 1 0 0 1 0 1.42l-6 6a1 1 0 0 1-.71.29Z" />
    </svg>
  );
}

export default AngleDoubleSmallRight;