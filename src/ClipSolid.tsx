import * as React from "react";

function ClipSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.201 511.201"
      style={{
        enableBackground: "new 0 0 511.201 511.201",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      {...props}
    >
      <path d="M496.108 203.908c-8.331-8.328-21.835-8.328-30.165 0L233.58 437.274c-41.656 41.661-109.197 41.666-150.859.011s-41.666-109.197-.011-150.859L307.756 60.463c25.193-24.792 65.715-24.467 90.507.726 24.507 24.904 24.512 64.86.011 89.77L173.228 376.922c-8.433 8.078-21.733 8.078-30.165 0-8.328-8.331-8.328-21.835 0-30.165l200.363-201.28c8.185-8.475 7.951-21.98-.524-30.165-8.267-7.985-21.374-7.985-29.641 0l-200.363 201.28c-24.996 24.991-24.999 65.514-.008 90.51l.008.008c25.331 24.172 65.186 24.172 90.517 0l225.024-225.984c41.122-42.183 40.261-109.715-1.922-150.837-41.43-40.389-107.503-40.384-148.926.009L52.545 256.26c-58.321 58.321-58.321 152.879 0 211.2s152.879 58.321 211.2 0l232.363-233.301c8.353-8.309 8.39-21.816.081-30.17l-.081-.081z" />
    </svg>
  );
}

export default ClipSolid;