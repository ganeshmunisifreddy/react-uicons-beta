import * as React from "react";

function SpeakerSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
      <path d="M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm-4 4.5A1.5 1.5 0 1 1 10.5 6 1.5 1.5 0 0 1 12 4.5ZM12 20a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" />
    </svg>
  );
}

export default SpeakerSolid;
