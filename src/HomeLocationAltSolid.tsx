import * as React from "react";

function HomeLocationAltSolid(props: any) {
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
      <path d="M16.243 10.764a6 6 0 0 0-8.486 8.485l3.507 3.43a1.053 1.053 0 0 0 1.472 0l3.507-3.43a6 6 0 0 0 0-8.485ZM12 16.994a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
      <path d="m21.8 5.579-7-4.724a4.981 4.981 0 0 0-5.6 0l-7 4.724A4.993 4.993 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5h4.754l-3.395-3.321A8 8 0 1 1 17.657 9.35a8 8 0 0 1 0 11.313L14.245 24H19a5.006 5.006 0 0 0 5-5V9.724a5 5 0 0 0-2.2-4.145Z" />
    </svg>
  );
}

export default HomeLocationAltSolid;
