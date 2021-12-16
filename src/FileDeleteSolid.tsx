import * as React from "react";

function FileDeleteSolid(props: any) {
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
      <path d="M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15a1 1 0 0 1-1-1zm8 3.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024V7a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zM13.414 17l1.793-1.793a1 1 0 0 0-1.414-1.414L12 15.586l-1.793-1.793a1 1 0 0 0-1.414 1.414L10.586 17l-1.793 1.793a1 1 0 1 0 1.414 1.414L12 18.414l1.793 1.793a1 1 0 0 0 1.414-1.414z" />
    </svg>
  );
}

export default FileDeleteSolid;
