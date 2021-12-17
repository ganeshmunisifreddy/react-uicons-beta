import * as React from "react";

function BreadSlice(props: any) {
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
      <path d="M17 23H7a5.006 5.006 0 0 1-5-5v-7.554a1.119 1.119 0 0 0-.391-.792A4.989 4.989 0 0 1 .066 5.179C.482 2.6 2.85 1 6.242 1h12.606a5.122 5.122 0 0 1 5.086 4.179 4.99 4.99 0 0 1-1.546 4.478 1.115 1.115 0 0 0-.388.789V18a5.006 5.006 0 0 1-5 5ZM6.242 3c-2.414 0-3.945.911-4.2 2.5a2.951 2.951 0 0 0 .924 2.685A3.072 3.072 0 0 1 4 10.446V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7.554a3.061 3.061 0 0 1 1.034-2.261 2.952 2.952 0 0 0 .925-2.685A3.106 3.106 0 0 0 18.848 3ZM8 12a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm4 4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export default BreadSlice;
