import * as React from "react";

function SettingsSolid(props: any) {
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
      <path d="M1.607 18a3 3 0 0 0 4.1 1.1l.445-.257A8.977 8.977 0 0 0 9 20.487V21a3 3 0 0 0 6 0v-.513a8.977 8.977 0 0 0 2.848-1.646l.447.258a3 3 0 0 0 3-5.2l-.444-.256a9.1 9.1 0 0 0 0-3.29l.444-.256a3 3 0 1 0-3-5.2l-.445.257A8.977 8.977 0 0 0 15 3.513V3a3 3 0 0 0-6 0v.513a8.977 8.977 0 0 0-2.848 1.646L5.705 4.9a3 3 0 0 0-3 5.2l.444.256a9.1 9.1 0 0 0 0 3.29l-.444.256A3.006 3.006 0 0 0 1.607 18ZM12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z" />
    </svg>
  );
}

export default SettingsSolid;
