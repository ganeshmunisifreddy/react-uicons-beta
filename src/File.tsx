import * as React from "react";

function File(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M19.949 5.536 16.465 2.05A6.958 6.958 0 0 0 11.515 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515a6.951 6.951 0 0 0-2.051-4.949ZM18.535 6.95A4.983 4.983 0 0 1 19.316 8H15a1 1 0 0 1-1-1V2.684a5.01 5.01 0 0 1 1.051.78ZM20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4.515c.164 0 .323.032.485.047V7a3 3 0 0 0 3 3h4.953c.015.162.047.32.047.485Z" />
    </svg>
  );
}

export default File;
