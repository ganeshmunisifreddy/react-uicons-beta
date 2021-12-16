import * as React from "react";

function RingsWeddingSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 8a7.974 7.974 0 0 0-5.974 2.7 6.882 6.882 0 0 0-1.495-.524L9.9 7.447a1 1 0 0 0-.043-.971A3.4 3.4 0 0 0 7 5a3.4 3.4 0 0 0-2.852 1.476 1 1 0 0 0-.043.971l1.364 2.727a7 7 0 1 0 5.866 12.312A8 8 0 1 0 16 8Zm-4.766 11.63a5.946 5.946 0 0 1-.678-6.137 4.946 4.946 0 0 1 .678 6.137ZM2 17a4.987 4.987 0 0 1 6.879-4.627 7.957 7.957 0 0 0 .966 8.73A4.99 4.99 0 0 1 2 17Zm14 5a5.961 5.961 0 0 1-3.278-.981 6.963 6.963 0 0 0-1.022-9.193A6 6 0 1 1 16 22ZM10.105 3.553l1-2a1 1 0 1 1 1.79.894l-1 2a1 1 0 0 1-1.79-.894Zm-9-1.106A1 1 0 0 1 2.9 1.553l1 2a1 1 0 0 1-1.79.894ZM6 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Z" />
    </svg>
  );
}

export default RingsWeddingSolid;