import * as React from "react";

function ChartConnectedSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M24 11.983a3.994 3.994 0 0 0-2.607-3.735l-.038-.091a10.07 10.07 0 0 0-5.294-5.419l-.329-.144a3.981 3.981 0 0 0-7.462 0l-.418.188a10.19 10.19 0 0 0-5.235 5.463 3.98 3.98 0 0 0-.03 7.468l.128.3a10.1 10.1 0 0 0 5.162 5.228l.393.176a3.982 3.982 0 0 0 7.46 0l.367-.163a10.193 10.193 0 0 0 5.309-5.534A4 4 0 0 0 24 11.983Zm-8.107 7.131a3.991 3.991 0 0 0-7.787 0 8.093 8.093 0 0 1-3.231-3.234A3.991 3.991 0 0 0 4.9 8.1a8.19 8.19 0 0 1 3.206-3.2 3.991 3.991 0 0 0 7.785 0A8.225 8.225 0 0 1 19.1 8.093a3.991 3.991 0 0 0 .015 7.785 8.207 8.207 0 0 1-3.222 3.236Z" />
    </svg>
  );
}

export default ChartConnectedSolid;
