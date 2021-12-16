import * as React from "react";

function StickerSolid(props: any) {
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
      <path d="M23.782 12.173a4.08 4.08 0 0 1-.966 1.539l-9.1 9.1a4.026 4.026 0 0 1-1.539.95 10.3 10.3 0 0 1-.084-2.851 10.05 10.05 0 0 1 8.827-8.826 10.256 10.256 0 0 1 2.862.088zM10.1 20.7a12.063 12.063 0 0 1 10.6-10.6 12.357 12.357 0 0 1 3.228.078 12.034 12.034 0 1 0-13.752 13.744A12.306 12.306 0 0 1 10.1 20.7z" />
    </svg>
  );
}

export default StickerSolid;
