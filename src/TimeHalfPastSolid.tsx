import * as React from "react";

function TimeHalfPastSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M14.181.207A1 1 0 0 0 13 1.19v2.879a8 8 0 1 0 0 15.862v2.879a1 1 0 0 0 1.181.983 11.991 11.991 0 0 0 0-23.586zM13 13.723V16a1 1 0 0 1-2 0v-2.277a1.984 1.984 0 0 1 0-3.446V7a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446zM2.986 4.968a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zm-1.6 3.987a1 1 0 1 1-1.17.8 1 1 0 0 1 1.167-.8zm8.742 12.868a1 1 0 1 1-1.17.794 1 1 0 0 1 1.167-.794zM6.008 1.9a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zM10.182.209A1 1 0 1 1 9 .98a1 1 0 0 1 1.182-.771zM.234 14.046a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zm1.681 3.963a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zM4.967 21a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17z" />
    </svg>
  );
}

export default TimeHalfPastSolid;
