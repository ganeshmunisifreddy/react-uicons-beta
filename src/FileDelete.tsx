import * as React from "react";

function FileDelete(props: any) {
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
      <path d="M15.207 14.207 13.414 16l1.793 1.793a1 1 0 1 1-1.414 1.414L12 17.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L10.586 16l-1.793-1.793a1 1 0 0 1 1.414-1.414L12 14.586l1.793-1.793a1 1 0 0 1 1.414 1.414ZM22 10.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486A6.951 6.951 0 0 1 22 10.485Zm-6.949-7.021A5.01 5.01 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0-.781-1.05ZM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z" />
    </svg>
  );
}

export default FileDelete;
