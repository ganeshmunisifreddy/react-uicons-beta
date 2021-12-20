import * as React from "react";

function SearchSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        enableBackground: "new 0 0 511.786 511.786",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M213.382 426.694a212.415 212.415 0 0 0 134.976-48.171l127.275 127.253c8.475 8.185 21.98 7.95 30.165-.525 7.984-8.267 7.984-21.373 0-29.641L378.545 348.337c74.545-91.24 61.011-225.636-30.229-300.181S122.68-12.855 48.135 78.385-12.876 304.02 78.364 378.566a213.331 213.331 0 0 0 135.018 48.128z" />
    </svg>
  );
}

export default SearchSolid;
