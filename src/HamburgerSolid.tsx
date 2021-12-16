import * as React from "react";

function HamburgerSolid(props: any) {
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
      <path d="M22.938 17.884A7.007 7.007 0 0 1 16 24H8a7 7 0 0 1-6.912-5.949c.089.022.172.055.264.071a8 8 0 0 1 3.894 1.844 4.17 4.17 0 0 0 5.508 0A8 8 0 0 1 16 18.006h6a3.971 3.971 0 0 0 .938-.122ZM0 14.1a2.067 2.067 0 0 0 1.69 2.05 10 10 0 0 1 4.866 2.306 2.189 2.189 0 0 0 2.888 0A10 10 0 0 1 16 16.006h6a2 2 0 0 0 0-4H2.094A2.094 2.094 0 0 0 0 14.1ZM23 10v.148a3.984 3.984 0 0 0-1-.142H2.094A4.033 4.033 0 0 0 1 10.174V10A10.011 10.011 0 0 1 11 0h2a10.011 10.011 0 0 1 10 10ZM7 7a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm3-3a1 1 0 0 0-2 0 1 1 0 0 0 2 0Z" />
    </svg>
  );
}

export default HamburgerSolid;