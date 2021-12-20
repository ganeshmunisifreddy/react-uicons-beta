import * as React from "react";

function HourglassSolid(props: any) {
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
      <path d="M17 24H7.005a4.02 4.02 0 0 1-3.045-1.4 3.945 3.945 0 0 1-.916-3.158A12.517 12.517 0 0 1 7.445 12a12.517 12.517 0 0 1-4.4-7.444A3.945 3.945 0 0 1 3.96 1.4 4.02 4.02 0 0 1 7.005 0H17a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155A12.556 12.556 0 0 1 16.551 12a12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1-.918 3.156A4.017 4.017 0 0 1 17 24z" />
    </svg>
  );
}

export default HourglassSolid;
