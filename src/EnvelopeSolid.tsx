import * as React from "react";

function EnvelopeSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="m23.954 5.542-8.418 8.418a5.007 5.007 0 0 1-7.072 0L.046 5.542C.032 5.7 0 5.843 0 6v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6c0-.157-.032-.3-.046-.458Z" />
      <path d="m14.122 12.546 9.134-9.135A4.986 4.986 0 0 0 19 1H5A4.986 4.986 0 0 0 .744 3.411l9.134 9.135a3.007 3.007 0 0 0 4.244 0Z" />
    </svg>
  );
}

export default EnvelopeSolid;
