import * as React from "react";

function MagicWandSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="m12.883 15.216-7.935 7.935a2.9 2.9 0 1 1-4.1-4.1l7.935-7.935zM17.1 6.9a2.967 2.967 0 0 0-4.1 0l-2.8 2.8 4.1 4.1 2.8-2.8a2.9 2.9 0 0 0 0-4.1zM4.863 5.145l1.55.442.442 1.55a1.191 1.191 0 0 0 2.29 0l.442-1.55 1.55-.442a1.191 1.191 0 0 0 0-2.29l-1.55-.442-.442-1.55a1.191 1.191 0 0 0-2.29 0l-.442 1.55-1.55.442a1.191 1.191 0 0 0 0 2.29zm12 12 1.55.442.442 1.55a1.191 1.191 0 0 0 2.29 0l.442-1.55 1.55-.442a1.191 1.191 0 0 0 0-2.29l-1.55-.442-.442-1.55a1.191 1.191 0 0 0-2.29 0l-.442 1.55-1.55.442a1.191 1.191 0 0 0 0 2.29zM17.756 4.5l1.355.387.389 1.357a1.042 1.042 0 0 0 2 0l.387-1.355 1.357-.389a1.042 1.042 0 0 0 0-2l-1.355-.387L21.5.756a1.042 1.042 0 0 0-2 0l-.387 1.355-1.357.389a1.042 1.042 0 0 0 0 2z" />
    </svg>
  );
}

export default MagicWandSolid;
