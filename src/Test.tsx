import * as React from "react";

function Test(props: any) {
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
      <path d="M16 17a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zm-2-2a1 1 0 0 1-1-1v-1h-2v1a1 1 0 0 1-2 0v-4a3 3 0 0 1 6 0v4a1 1 0 0 1-1 1zm-1-4v-1a1 1 0 0 0-2 0v1zm-1.711 5.3-1.612 1.63a.25.25 0 0 1-.344.01l-.616-.64a1 1 0 0 0-1.434 1.4l.626.644a2.255 2.255 0 0 0 3.186 0l1.616-1.644a1 1 0 0 0-1.422-1.4zM21 6.657V19a5.006 5.006 0 0 1-5 5H8a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6.343a4.969 4.969 0 0 1 3.536 1.465l1.656 1.656A4.969 4.969 0 0 1 21 6.657zm-4.535-3.778A3.042 3.042 0 0 0 16 2.5V5h2.5a3.042 3.042 0 0 0-.38-.465zM19 7h-3a2 2 0 0 1-2-2V2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z" />
    </svg>
  );
}

export default Test;