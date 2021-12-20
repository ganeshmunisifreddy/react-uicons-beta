import * as React from "react";

function TestSolid(props: any) {
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
      <path d="M16 7a2 2 0 0 1-2-2V0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7zm-4.289 12.7L10.1 21.339a2.255 2.255 0 0 1-3.186 0l-.631-.639a1 1 0 0 1 1.434-1.394l.616.633a.249.249 0 0 0 .344-.009l1.612-1.63a1 1 0 1 1 1.422 1.4zM13 15v-1h-2v1a1 1 0 1 1-2 0v-4a3 3 0 0 1 6 0v4a1 1 0 1 1-2 0zm4 6h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm-4-10v1h-2v-1a1 1 0 0 1 2 0zm7.7-6H16V.3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658A4.954 4.954 0 0 1 20.7 5z" />
    </svg>
  );
}

export default TestSolid;
