import * as React from "react";

function EnvelopeBanSolid(props: any) {
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
      <path d="M18.5 11c7.269-.231 7.267-10.77 0-11-7.269.231-7.267 10.77 0 11Zm0-2a3.449 3.449 0 0 1-1.652-.434l4.718-4.718A3.5 3.5 0 0 1 18.5 9Zm0-7a3.449 3.449 0 0 1 1.652.434l-4.718 4.718A3.5 3.5 0 0 1 18.5 2Zm0 11a7.474 7.474 0 0 0 5.5-2.413V19a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8c0-.157.032-.3.046-.458l8.418 8.418a5.008 5.008 0 0 0 7.072 0L18.5 13Zm-8.622 1.546L.744 5.411A4.986 4.986 0 0 1 5 3h6.436a7.532 7.532 0 0 0 4.64 9.592l-1.954 1.954a3.008 3.008 0 0 1-4.244 0Z" />
    </svg>
  );
}

export default EnvelopeBanSolid;
