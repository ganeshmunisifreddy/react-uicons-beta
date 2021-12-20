import * as React from "react";

function CloudDisabledSolid(props: any) {
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
      <path d="M23.707 22.293a1 1 0 1 1-1.414 1.414l-22-22A1 1 0 0 1 1.707.293l2.87 2.87a7.871 7.871 0 0 1 4.237-2.078 7.985 7.985 0 0 1 8.82 5.541 1.088 1.088 0 0 0 .722.735 7.96 7.96 0 0 1 5.62 8.277 7.379 7.379 0 0 1-2.2 4.729zM3.441 7.663a.811.811 0 0 0-1.379.464A7.286 7.286 0 0 0 2 9.039a7.422 7.422 0 0 0 .941 3.609A5.443 5.443 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23h9.1a11.87 11.87 0 0 0 1.952-.158.839.839 0 0 0 .462-1.42z" />
    </svg>
  );
}

export default CloudDisabledSolid;
