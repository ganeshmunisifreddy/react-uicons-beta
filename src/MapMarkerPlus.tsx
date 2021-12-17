import * as React from "react";

function MapMarkerPlus(props: any) {
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
      fill="currentColor"
      {...props}
    >
      <path d="M174.394 478.877c44.856 43.881 116.497 44.06 161.572.404l84.946-78.499c92.021-90.795 93.014-238.997 2.218-331.017S184.133-23.249 92.113 67.547c-.744.734-1.484 1.474-2.218 2.218-91.403 91.417-91.391 239.622.026 331.025l.569.567 83.904 77.52zM119.983 99.854c74.626-74.955 195.885-75.222 270.84-.596s75.222 195.885.596 270.84l-84.776 78.35c-28.956 27.252-74.174 27.084-102.927-.383l-83.733-77.371c-74.79-74.79-74.791-196.048-.002-270.839l.002-.001zm29.025 135.42c0-11.752 9.527-21.279 21.279-21.279h63.837v-63.837c0-11.752 9.527-21.279 21.279-21.279s21.279 9.527 21.279 21.279v63.837h63.837c11.752 0 21.279 9.527 21.279 21.279s-9.527 21.279-21.279 21.279h-63.837v63.837c0 11.752-9.527 21.279-21.279 21.279s-21.279-9.527-21.279-21.279v-63.837h-63.837c-11.752 0-21.279-9.527-21.279-21.279z" />
    </svg>
  );
}

export default MapMarkerPlus;
