import * as React from "react";

function NetworkCloud(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      {...props}
    >
      <path d="M490.667 426.667H316.075a63.999 63.999 0 0 0-38.741-38.741v-88.789c28.672 0 53.76-.256 66.027-.491a110.913 110.913 0 0 0 22.741-2.795c39.201-9.122 69.811-39.732 78.933-78.933 13.398-56.167-20.211-112.828-75.925-128l-3.669-.811c-6.4-1.429-9.621-2.133-12.544-9.152-27.074-65.303-101.96-96.295-167.263-69.222A127.999 127.999 0 0 0 110.4 97.237a135.818 135.818 0 0 0-1.216 58.283c-37.88 16.299-55.374 60.219-39.076 98.098a74.668 74.668 0 0 0 48.654 42.446 78.771 78.771 0 0 0 17.771 2.603c13.973.384 54.059.555 95.872.555h2.261v88.725a63.998 63.998 0 0 0-38.741 38.72H21.333C9.551 426.667 0 436.218 0 448c0 11.782 9.551 21.333 21.333 21.333h174.592c11.559 33.178 47.826 50.704 81.004 39.146a63.613 63.613 0 0 0 39.145-39.146h174.592c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.55-21.333-21.332-21.333zM137.728 256a36.32 36.32 0 0 1-8.107-1.216 31.425 31.425 0 0 1-21.76-21.739c-4.54-15.55 3.256-32.04 18.155-38.4 19.159-8.109 29.761-28.774 25.173-49.067-9.726-46.114 19.773-91.381 65.887-101.106a84.994 84.994 0 0 1 4.641-.846 89.43 89.43 0 0 1 12.565-.96c34.665-.12 65.98 20.676 79.317 52.672a56.404 56.404 0 0 0 44.459 34.795c33.514 9.281 53.635 43.463 45.483 77.269a63.445 63.445 0 0 1-46.933 46.763 66.642 66.642 0 0 1-14.037 1.749c-14.784.278-188.736.513-204.843.086zM256 469.333c-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333 0 11.782-9.551 21.333-21.333 21.333z" />
    </svg>
  );
}

export default NetworkCloud;
