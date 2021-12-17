import * as React from "react";

function TimeCheckSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M18.951 23h-.033a1.872 1.872 0 0 1-1.344-.6l-1.918-1.881a1 1 0 0 1 .022-1.414l.003-.003a1 1 0 0 1 1.41.024l1.861 1.823 3.341-3.341a1 1 0 0 1 1.414 1.414l-3.421 3.421a1.87 1.87 0 0 1-1.335.557z" />
      <path d="M14.035 20.015a5.97 5.97 0 0 1 9.524-4.803c1.773-6.385-1.966-12.998-8.35-14.771S2.213 2.406.44 8.791 2.406 21.79 8.79 23.563c2.1.583 4.319.583 6.419 0a5.951 5.951 0 0 1-1.174-3.548zM13 12.022a1 1 0 0 1-.294.708l-3.005 3.006a1.001 1.001 0 0 1-1.416-1.417l2.712-2.712V7.013a1.002 1.002 0 1 1 2.003 0z" />
    </svg>
  );
}

export default TimeCheckSolid;
