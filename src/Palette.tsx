import * as React from "react";

function Palette(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.115 8.05a1.5 1.5 0 1 0 1.835 1.065 1.5 1.5 0 0 0-1.835-1.065ZM12.115 5.05a1.5 1.5 0 1 0 1.835 1.065 1.5 1.5 0 0 0-1.835-1.065ZM7.115 8.05A1.5 1.5 0 1 0 8.95 9.115 1.5 1.5 0 0 0 7.115 8.05ZM7.115 14.05a1.5 1.5 0 1 0 1.835 1.065 1.5 1.5 0 0 0-1.835-1.065Z" />
      <path d="M12.5.007A12 12 0 0 0 .083 12a12.014 12.014 0 0 0 12 12c.338 0 .67-.022 1-.05a1 1 0 0 0 .916-1l-.032-3.588a3.567 3.567 0 0 1 6.09-2.562l.1.1a1.912 1.912 0 0 0 1.769.521 1.888 1.888 0 0 0 1.377-1.177 11.924 11.924 0 0 0 .777-4.544A12.155 12.155 0 0 0 12.5.007Zm8.982 15.4-.014-.014a5.567 5.567 0 0 0-9.5 3.985L11.992 22a10 10 0 0 1 .09-20c.117 0 .235 0 .353.006a10.127 10.127 0 0 1 9.645 9.743 9.892 9.892 0 0 1-.595 3.651Z" />
    </svg>
  );
}

export default Palette;
